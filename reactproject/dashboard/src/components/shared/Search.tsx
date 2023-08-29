import React, {
  ChangeEventHandler,
  FC,
  SyntheticEvent,
  useCallback,
  useContext,
  useState,
} from "react";
import { FlexRow } from "./flex";
import { GiCancel } from "react-icons/gi";
import { SearchContext } from "../../contexts/SearchContext";

interface PropsInterface {

}

export const Search: FC<PropsInterface> = () => {
  const {value, setValue} = useContext(SearchContext)!;


  const onChange = useCallback((event: { target: { value: string } }) => {    //notes typization
    // unstable SyntheticEvent<HTMLInputElement>
    // ChangeEventHandler<HTMLInputElement>
    setValue(event.target.value);
  }, [setValue]);

  const onClear = useCallback(() => {
    setValue("");
  }, [setValue]);

  return (
    <FlexRow width="100%" justifyContent="center" padding="10px">
      <input value={value} onChange={onChange} placeholder="search" />
      <GiCancel size="20px" onClick={() => onClear()} />
    </FlexRow>
  );
};
