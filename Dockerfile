FROM node:16.15.1-buster as builder

WORKDIR /calcom

COPY ./calcom.zip ./calcom.zip
RUN unzip ./calcom.zip -d ./

ARG CALCOM_DATABASE_URL
ARG CALCOM_PUBLIC_URL
ARG NEXTAUTH_SECRET

ENV DATABASE_URL=$CALCOM_DATABASE_URL
ENV NEXT_PUBLIC_APP_URL=$CALCOM_PUBLIC_URL
ENV NEXT_PUBLIC_WEBAPP_URL=$CALCOM_PUBLIC_URL
ENV NEXT_PUBLIC_WEBSITE_URL=$CALCOM_PUBLIC_URL
ENV NODE_OPTIONS="--max-old-space-size=4096"
ENV NEXT_PUBLIC_LICENSE_CONSENT="agree"
ENV NEXTAUTH_SECRET=$NEXTAUTH_SECRET
ENV CALENDSO_ENCRYPTION_KEY=$NEXTAUTH_SECRET
ENV NEXT_PUBLIC_DEBUG=1


RUN yarn install --frozen-lockfile


RUN yarn build

FROM node:16.15.1-buster as runner

WORKDIR /calcom
ENV NODE_ENV production
ENV NODE_OPTIONS="--max-old-space-size=4096"

COPY ./calcom.zip ./calcom.zip
RUN unzip ./calcom.zip -d ./

RUN apt-get update && \
    apt-get -y install netcat && \
    rm -rf /var/lib/apt/lists/* && \
    npm install --global prisma

COPY --from=builder /calcom/node_modules ./node_modules
COPY --from=builder /calcom/packages ./packages
COPY --from=builder /calcom/apps/web ./apps/web
COPY --from=builder /calcom/apps/api ./apps/api
COPY --from=builder /calcom/packages/prisma/schema.prisma ./prisma/schema.prisma
COPY scripts scripts

EXPOSE 3000 3002 3004
CMD ["/calcom/scripts/start.sh"]
