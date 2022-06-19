import { TrashIcon } from "@heroicons/react/solid";
import { Factory } from "react";
import {
  FieldProps,
  ConjsProps,
  SwitchProps,
  ButtonProps,
  ButtonGroupProps,
  ValueSourcesProps,
  Utils as QbUtils,
} from "react-awesome-query-builder";

import { Button as CalButton } from "@calcom/ui";
import { Input } from "@calcom/ui/form/fields";

// import { mapListValues } from "../../../../utils/stuff";
import { SelectWithValidation as Select } from "@components/ui/form/Select";

const TextAreaWidget = (props) => {
  const { value, setValue, readonly, placeholder, maxLength, fullWidth, customProps, ...remainingProps } =
    props;

  const onChange = (e) => {
    let val = e.target.value;
    if (val === "") val = undefined; // don't allow empty value
    setValue(val);
  };

  const textValue = value || "";
  return (
    <textarea
      value={textValue}
      placeholder={placeholder}
      disabled={readonly}
      onChange={onChange}
      maxLength={maxLength}
      className="flex flex-grow border-gray-300 text-sm"
      style={{
        width: fullWidth ? "100%" : undefined,
      }}
      {...customProps}
      {...remainingProps}
    />
  );
};

const TextWidget = (props) => {
  const { value, setValue, config, readonly, placeholder, maxLength, customProps, ...remainingProps } = props;
  let { type } = props;
  type = type || "text";
  const onChange = (e) => {
    let val = e.target.value;
    if (val === "") val = undefined; // don't allow empty value
    setValue(val);
  };
  const textValue = value || "";
  return (
    <input
      type={type}
      className="flex flex-grow border-gray-300 text-sm"
      value={textValue}
      placeholder={placeholder}
      disabled={readonly}
      onChange={onChange}
      maxLength={maxLength}
      {...remainingProps}
      {...customProps}
    />
  );
};
function NumberWidget({ value, setValue, ...remainingProps }) {
  return (
    <Input
      type="number"
      className="mt-0"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      {...remainingProps}></Input>
  );
}

const MultiSelectWidget = ({ listValues, setValue, value }) => {
  //TODO: Use Select here.
  //TODO: Let's set listValue itself as label and value instead of using title.
  const selectItems = listValues.map((item) => {
    return {
      label: item.title,
      value: item.value,
    };
  });

  const defaultValue = selectItems.filter((item) => value?.includes(item.value));

  return (
    <Select
      menuPosition="fixed"
      onChange={(items) => {
        setValue(items?.map((item) => item.value));
      }}
      defaultValue={defaultValue}
      isMulti={true}
      options={selectItems}></Select>
  );
};

function Button({ type, label, onClick, readonly, config }) {
  if (type === "delRule" || type == "delGroup") {
    return (
      <button className="ml-5">
        <TrashIcon className="m-0 h-4 w-4 text-neutral-500" onClick={onClick}></TrashIcon>
      </button>
    );
  }
  if (type === "addRule") {
    label = "Add rule";
  } else if (type == "addGroup") {
    label = "Add rule group";
  }
  return (
    <CalButton type="button" color="secondary" size="sm" disabled={readonly} onClick={onClick}>
      {label}
    </CalButton>
  );
}

function ButtonGroup({ children, config }) {
  return (
    <>
      {children.map((button, index) => {
        return (
          <span key={index} className="ml-2">
            {button}
          </span>
        );
      })}
    </>
  );
}
function Conjs({
  id,
  not,
  setNot,
  conjunctionOptions,
  setConjunction,
  disabled,
  readonly,
  config,
  showNot,
  notLabel,
}: ConjsProps) {
  const conjsCount = Object.keys(conjunctionOptions!).length;
  const lessThenTwo = disabled;
  // react-awesome-query-builder has faulty types
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { forceShowConj } = config!.settings;
  const showConj = forceShowConj || (conjsCount > 1 && !lessThenTwo);
  const options = [
    { label: "All", value: "all" },
    { label: "Any", value: "any" },
    { label: "None", value: "none" },
  ];
  const renderOptions = () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { checked: andSelected } = conjunctionOptions!["AND"];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { checked: orSelected } = conjunctionOptions!["OR"];
    const notSelected = not;
    // Default to All
    let value = andSelected ? "all" : orSelected ? "any" : "all";

    if (notSelected) {
      // not of All -> None
      // not of Any -> All
      value = value == "any" ? "none" : "all";
    }
    const selectValue = options.find((option) => option.value === value);

    return (
      <div className="flex items-center text-sm">
        <span>Rule group when</span>
        <Select
          className="flex px-2"
          defaultValue={selectValue}
          options={options}
          onChange={(option) => {
            if (!option) return;
            if (option.value === "all") {
              setConjunction("AND");
              setNot(false);
            } else if (option.value === "any") {
              setConjunction("OR");
              setNot(false);
            } else if (option.value === "none") {
              setConjunction("OR");
              setNot(true);
            }
          }}></Select>
        <span>match</span>
      </div>
    );
  };

  return showConj ? renderOptions() : null;
}

const FieldSelect = function FieldSelect(props: FieldProps) {
  const { items, setField, selectedKey } = props;
  const selectItems = items.map((item) => {
    return {
      ...item,
      value: item.key,
    };
  });

  const defaultValue = selectItems.find((item) => {
    return item.value === selectedKey;
  });

  return (
    <Select
      menuPosition="fixed"
      onChange={(item) => {
        setField(item.value);
      }}
      defaultValue={defaultValue}
      options={selectItems}></Select>
  );
};

const ValueSources = ({ config, valueSources, valueSrc, title, setValueSrc, readonly }) => {
  const renderOptions = (valueSources) =>
    valueSources.map(([srcKey, info]) => (
      <option key={srcKey} value={srcKey}>
        {info.label}
      </option>
    ));

  const onChange = (e) => setValueSrc(e.target.value);

  return (
    <select onChange={onChange} value={valueSrc} disabled={readonly}>
      {renderOptions(valueSources)}
    </select>
  );
};

// import { mapListValues } from "../../../../utils/stuff";

function SelectWidget({ listValues, setValue, value, ...remainingProps }) {
  const selectItems = listValues.map((item) => {
    return {
      label: item.title,
      value: item.value,
    };
  });
  const defaultValue = selectItems.find((item) => item.value === value);

  return (
    <Select
      menuPosition="fixed"
      onChange={(item) => {
        setValue(item.value);
      }}
      defaultValue={defaultValue}
      options={selectItems}
      {...remainingProps}></Select>
  );
}

const AutocompleteWidget = SelectWidget;

const BooleanWidget = (props) => {
  const { value, setValue, config, labelYes, labelNo, readonly, customProps = {} } = props;
  const customRadioYesProps = customProps.radioYes || {};
  const customRadioNoProps = customProps.radioNo || {};

  const onRadioChange = (e) => setValue(e.target.value == "true");
  const id = QbUtils.uuid(),
    id2 = QbUtils.uuid();

  return (
    <>
      <input
        key={id}
        type="radio"
        id={id}
        value={true}
        checked={!!value}
        disabled={readonly}
        onChange={onRadioChange}
        {...customRadioYesProps}
      />
      <label style={{ display: "inline" }} key={id + "label"} htmlFor={id}>
        {labelYes}
      </label>
      <input
        key={id2}
        type="radio"
        id={id2}
        value={false}
        checked={!value}
        disabled={readonly}
        onChange={onRadioChange}
        {...customRadioNoProps}
      />
      <label style={{ display: "inline" }} key={id2 + "label"} htmlFor={id2}>
        {labelNo}
      </label>
    </>
  );
};

// provider
const Provider = ({ config, children }: any) => children;

const Widgets = {
  TextWidget,
  TextAreaWidget,
  SelectWidget,
  NumberWidget,
  BooleanWidget,
  MultiSelectWidget,
  AutocompleteWidget,
  FieldSelect,
  Button,
  ButtonGroup,
  Conjs,
  ValueSources,
  Provider,
};
export default Widgets;
