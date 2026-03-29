import { Checkbox as ChakraCheckbox } from "@chakra-ui/react";
import * as React from "react";

export const Checkbox = React.forwardRef(function Checkbox(props, ref) {
  const { icon, children, inputProps, rootRef, value, ...rest } = props;
  return (
    <ChakraCheckbox.Root ref={rootRef} value={value} {...rest}>
      <ChakraCheckbox.HiddenInput ref={ref} value={value} {...inputProps} />
      <ChakraCheckbox.Control>
        {icon || <ChakraCheckbox.Indicator />}
      </ChakraCheckbox.Control>
      {children != null && (
        <ChakraCheckbox.Label>{children}</ChakraCheckbox.Label>
      )}
    </ChakraCheckbox.Root>
  );
});
