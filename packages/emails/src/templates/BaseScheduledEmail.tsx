import type { TFunction } from "next-i18next";

import dayjs from "@calcom/dayjs";
import type { CalendarEvent, Person } from "@calcom/types/Calendar";
import Button from "@calcom/ui/Button";

import { BaseEmailHtml, Info, LocationInfo, WhenInfo, WhoInfo, Paragraph } from "../components";
import "./../../../../apps/web/styles/fonts.css";

const Spacer = () => <p style={{ height: 6 }} />;

const DIGI_URL = "https://app-staging.suchtberatung.digital/login";

export const BaseScheduledEmail = (
  props: {
    calEvent: CalendarEvent;
    attendee: Person;
    timeZone: string;
    t: TFunction;
  } & Partial<React.ComponentProps<typeof BaseEmailHtml>>
) => {
  const { t, timeZone } = props;

  function getRecipientStart(format: string) {
    return dayjs(props.calEvent.startTime).tz(timeZone).format(format);
  }

  function getRecipientEnd(format: string) {
    return dayjs(props.calEvent.endTime).tz(timeZone).format(format);
  }

  const subject = t(props.subject || "confirmed_event_type_subject", {
    eventType: props.calEvent.type,
    name: props.calEvent.team?.name || props.calEvent.organizer.name,
    date: `${getRecipientStart("h:mma")} - ${getRecipientEnd("h:mma")}, ${t(
      getRecipientStart("dddd").toLowerCase()
    )}, ${t(getRecipientStart("MMMM").toLowerCase())} ${getRecipientStart("D, YYYY")}`,
  });

  return (
    <div>
      <BaseEmailHtml
        headerType={props.headerType || "checkCircle"}
        subject={props.subject || subject}
        title={t(
          props.title
            ? props.title
            : props.calEvent.recurringEvent?.count
            ? "your_event_has_been_scheduled_recurring"
            : "your_event_has_been_scheduled"
        )}
        t={t}
        calEvent={props.calEvent}>
        <Info label={t("cancellation_reason")} description={props.calEvent.cancellationReason} withSpacer />
        <Info label={t("rejection_reason")} description={props.calEvent.rejectionReason} withSpacer />
        <Info label={t("what")} description={props.calEvent.type} withSpacer />
        <WhenInfo calEvent={props.calEvent} t={t} timeZone={timeZone} />
        <WhoInfo calEvent={props.calEvent} t={t} />
        <LocationInfo calEvent={props.calEvent} t={t} />
        <Info label={t("description")} description={props.calEvent.description} withSpacer />
        <Info label={t("additional_notes")} description={props.calEvent.additionalNotes} withSpacer />
        <Spacer />
        <Button
          style={{
            backgroundColor: "#225e65",
            color: "white",
            padding: "8 24",
            margin: "6 0",
            fontSize: 16,
            border: "none",
            cursor: "pointer",
            textDecoration: "none",
            fontFamily: "'Nunito', sans-serif",
          }}
          size="base"
          href={DIGI_URL}
          type="button">
          {t("to_login")}
        </Button>
        <Spacer />
        <Paragraph content={t("end_greeting")} />
        <Paragraph content={t("end_greeting_subtitle")} />
      </BaseEmailHtml>
    </div>
  );
};
