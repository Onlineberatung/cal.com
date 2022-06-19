import { Settings } from "react-awesome-query-builder";
import BasicConfig from "react-awesome-query-builder/lib/config/basic";

import Widgets from "../widgets";

const {
  BooleanWidget,
  TextWidget,
  TextAreaWidget,
  MultiSelectWidget,
  SelectWidget,
  NumberWidget,
  FieldSelect,
  Conjs,
  Button,
  ButtonGroup,
  ValueSources,
  Provider,
} = Widgets;

const renderComponent = function <T1>(props: T1 | undefined, Component: React.FC<T1>) {
  if (!props) {
    return <div></div>;
  }
  return <Component {...props} />;
};

const settings: Settings = {
  ...BasicConfig.settings,

  renderField: (props) => renderComponent(props, FieldSelect),
  renderOperator: (props) => renderComponent(props, FieldSelect),
  renderFunc: (props) => renderComponent(props, FieldSelect),
  renderConjs: (props) => renderComponent(props, Conjs),
  renderButton: (props) => renderComponent(props, Button),
  renderButtonGroup: (props) => renderComponent(props, ButtonGroup),
  renderValueSources: (props) => renderComponent(props, ValueSources),
  renderProvider: (props) => renderComponent(props, Provider),

  groupActionsPosition: "bottomCenter",

  // Disable groups
  maxNesting: 1,
};

const widgets = {
  ...BasicConfig.widgets,
  text: {
    ...BasicConfig.widgets.text,
    factory: (props) => <TextWidget {...props} />,
  },
  textarea: {
    ...BasicConfig.widgets.textarea,
    factory: (props) => <TextAreaWidget {...props} />,
  },
  number: {
    ...BasicConfig.widgets.number,
    factory: (props) => <NumberWidget {...props} />,
  },
  multiselect: {
    ...BasicConfig.widgets.multiselect,
    factory: (props) => {
      return <MultiSelectWidget {...props} />;
    },
  },
  select: {
    ...BasicConfig.widgets.select,
    factory: (props) => {
      return <SelectWidget {...props} />;
    },
  },
  boolean: {
    ...BasicConfig.widgets.boolean,
    factory: (props) => <BooleanWidget {...props} />,
  },
  phone: {
    ...BasicConfig.widgets.text,
    factory: (props) => <TextWidget type="tel" {...props} />,
    valuePlaceholder: "Select range",
  },
  email: {
    ...BasicConfig.widgets.text,
    factory: (props) => <TextWidget type="email" {...props} />,
  },
};

const types = {
  ...BasicConfig.types,
  phone: {
    ...BasicConfig.types.text,
    widgets: {
      ...BasicConfig.types.text.widgets,
    },
  },
  email: {
    ...BasicConfig.types.text,
    widgets: {
      ...BasicConfig.types.text.widgets,
    },
  },
};

const operators = BasicConfig.operators;
operators.equal.label = operators.select_equals.label = "Equals";
operators.greater_or_equal.label = "Greater than or equal to";
operators.greater.label = "Greater than";
operators.less_or_equal.label = "Less than or equal to";
operators.less.label = "Less than";
operators.not_equal.label = operators.select_not_equals.label = "Does not equal";
operators.between.label = "Between";

delete operators.proximity;
delete operators.is_null;
delete operators.is_not_null;
const config = {
  conjunctions: BasicConfig.conjunctions,
  operators,
  types,
  widgets,
  settings,
};
export default config;
