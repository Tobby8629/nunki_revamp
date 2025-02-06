import { useContext } from "react";
import { FormContext } from "../../../pages/Telemedicine/Telemedicine";
import Input from "../../inputs/TextInput/Input";
import NumberLimit from "../../NumberLimit/NumberLimit";
import Dropdown from "../../inputs/DropDown/Dropdown";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import style from "../../inputs/TextInput/input.module.css";

const CheckInput = (e, extra = {}) => {
  const { form, setform } = useContext(FormContext);
  console.log(extra.other);
  switch (e?.type) {
    case "textInput":
      return (
        <Input
          name={e.name}
          placeholder={extra.other || e.placeholder}
          form={form}
          id={e.id}
          setform={setform}
          wInlinestyle={{ width: extra.width }}
          className={extra.className}
          type={extra.type}
        />
      );
    case "NumberInput":
      return (
        <NumberLimit
          maxLength={11}
          values={form}
          name={e?.name}
          setvalues={setform}
          placeholder={e?.placeholder}
          id={e.id}
          inputStyle={extra.inputStyle}
          className={extra.className}
        />
      );

    case "phoneInput":
      return (
        <div className={style.inputWrapper}>
          <PhoneInput
            international
            countryCallingCodeEditable={false}
            defaultCountry="ZA"
            value={form[e?.name]}
            onChange={(text) => {
              setform({ ...form, [e?.name]: text });
            }}
            placeholder={e?.placeholder}
            name={e.name}
            values={form}
            maxLength={16}
            className={`${style.inputStyle} input`}
          />
        </div>
      );

    case "dropdown":
      return (
        <Dropdown
          e={e}
          options={e.options}
          form={form}
          setform={setform}
          inputWrapper={extra.inputWrapper}
        />
      );
  }
};

export default CheckInput;
