import { useForm } from "react-hook-form";
import {
  Button,
  Input,
  Textarea,
  VStack,
  Field,
  Dialog,
  Checkbox,
  Fieldset,
  CheckboxGroup,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useEvents } from "../Context/Context";
import { useRevalidator } from "react-router-dom";
import { toaster } from "../components/ui/toaster";
import { useColorModeValue } from "../components/ui/color-mode.jsx";
import { useController } from "react-hook-form";

const categories = [
  { id: 1, name: "Sports" },
  { id: 2, name: "Games" },
  { id: 3, name: "Relaxation" },
];

export default function EditEvents() {
  const { edit, setEdit, selectedEvent } = useEvents();
  const {
    register,
    handleSubmit,
    reset,
    control,

    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      categoryIds: [],
    },
  });

  const { revalidate } = useRevalidator();
  useEffect(() => {
    if (selectedEvent) {
      const formatDateTime = (dt) => {
        if (!dt) return "";
        const date = new Date(dt);
        const pad = (n) => String(n).padStart(2, "0");

        const YYYY = date.getFullYear();
        const MM = pad(date.getMonth() + 1);
        const DD = pad(date.getDate());
        const HH = pad(date.getHours());
        const mm = pad(date.getMinutes());

        return `${YYYY}-${MM}-${DD}T${HH}:${mm}`;
      };
      reset({
        title: selectedEvent.title,
        description: selectedEvent.description,
        image: selectedEvent.image,
        startTime: formatDateTime(selectedEvent.startTime),
        endTime: formatDateTime(selectedEvent.endTime),
        category: selectedEvent.categoryIds?.map(String) || [],
      });
    }
  }, [selectedEvent, reset]);

  const textColor = useColorModeValue("gray.700", "gray.200");
  const cardBorder = useColorModeValue("gray.200", "gray.600");
  const cardBg = useColorModeValue("white", "gray.800");

  const onSubmit = async (data) => {
    try {
      const res = await fetch(
        `http://localhost:3000/events/${selectedEvent.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: data.title,
            description: data.description,
            image: data.image,
            categoryIds: (data.categoryIds || []).map(Number),
            startTime: data.startTime,
            endTime: data.endTime,
          }),
        },
      );
      if (!res.ok) throw new Error("could not update");
      reset(); // clear the form
      setEdit(false); // close Modal
      toaster.create({
        title: "Success",
        description: "Updating was successful",
      });
      revalidate(); // 🔥 reruns the loader
    } catch (error) {
      console.error(error);
      toaster.create({
        title: "Fail",
        description: "Updating was not successful",
      });
    }
  };

  return (
    <Dialog.Root
      open={edit}
      onOpenChange={(e) => setEdit(e.open)}
      borderWidth="1px"
      borderColor={`${cardBorder}`}
      borderRadius="20px"
      bg={cardBg}
      overflow="hidden"
    >
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.Header fontWeight="bold" fontSize="20px" color={textColor}>
            Edit Event Form
          </Dialog.Header>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Dialog.Body>
              <Field.Root invalid={errors.title} mt={2}>
                <Field.Label color={textColor}>Title:</Field.Label>
                <Input
                  type="text"
                  {...register("title", {
                    required: "title is required",
                  })}
                  color={textColor}
                />
                <Field.ErrorText color={textColor}>
                  {errors.title?.message}
                </Field.ErrorText>
              </Field.Root>

              <Field.Root invalid={errors.description} mt={4}>
                <Field.Label color={textColor}>Description</Field.Label>
                <Textarea
                  placeholder="Write your description..."
                  {...register("description", {
                    required: "description is required",
                  })}
                  color={textColor}
                />
                <Field.ErrorText color={textColor}>
                  {errors.description?.message}
                </Field.ErrorText>
              </Field.Root>
              <Field.Root invalid={errors.image} mt={4}>
                <Field.Label color={textColor}>Image URL: </Field.Label>
                <Input
                  type="url"
                  placeholder="Write source url ."
                  {...register("image", {
                    required: "image is required",
                  })}
                  color={textColor}
                />
                <Field.ErrorText color={textColor}>
                  {errors.image?.message}
                </Field.ErrorText>
              </Field.Root>
              <Field.Root invalid={errors.startTime} mt={4}>
                <Field.Label color={textColor}>Start Time:</Field.Label>
                <Input
                  type="datetime-local"
                  placeholder="Write start time(2026-03-16T20:35:45) ."
                  {...register("startTime", {
                    required: "Start Time  is required",
                  })}
                  color={textColor}
                />
                <Field.ErrorText color={textColor}>
                  {errors.startTime?.message}
                </Field.ErrorText>
              </Field.Root>
              <Field.Root invalid={errors.endTime} mt={4}>
                <Field.Label color={textColor}>End Time:</Field.Label>
                <Input
                  type="datetime-local"
                  placeholder="Write End time(2026-03-16T20:35:45) ."
                  {...register("endTime", {
                    required: "End Time  is required",
                  })}
                  color={textColor}
                />
                <Field.ErrorText color={textColor}>
                  {errors.endTime?.message}
                </Field.ErrorText>
              </Field.Root>

              <Fieldset.Root invalid={errors.categoryIds} mt={4}>
                <Fieldset.Legend color={textColor}>Categories:</Fieldset.Legend>

                {/* I used AI to help me with this code */}

                {(() => {
                  const categoryField = useController({
                    control,
                    name: "categoryIds",
                    defaultValue: [],
                    rules: {
                      validate: (value) =>
                        value.length > 0 || "Select at least one category",
                    },
                  });

                  return (
                    <CheckboxGroup
                      value={categoryField.field.value}
                      onValueChange={categoryField.field.onChange}
                      name={categoryField.field.name}
                    >
                      <VStack align="start" spacing={2}>
                        {categories.map((category) => (
                          <Checkbox.Root
                            key={category.id}
                            value={String(category.id)}
                          >
                            <Checkbox.HiddenInput />
                            <Checkbox.Control />
                            <Checkbox.Label color={textColor}>
                              {category.name}
                            </Checkbox.Label>
                          </Checkbox.Root>
                        ))}
                      </VStack>
                    </CheckboxGroup>
                  );
                })()}

                <Fieldset.ErrorText color={textColor}>
                  {errors.categoryIds?.message}
                </Fieldset.ErrorText>
              </Fieldset.Root>
            </Dialog.Body>

            <Dialog.Footer>
              <VStack w="full" spacing={3}>
                <Button
                  variant="outline"
                  width="full"
                  type="button"
                  onClick={() => setEdit(false)}
                  bg={useColorModeValue("gray.500", "gray.400")}
                  color="white"
                  _hover={{ bg: useColorModeValue("gray.600", "gray.300") }}
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  colorScheme="blue"
                  isLoading={isSubmitting}
                  width="full"
                  bg={useColorModeValue("blue.500", "blue.400")}
                  color="white"
                  _hover={{ bg: useColorModeValue("blue.600", "blue.300") }}
                >
                  Submit Edit Event
                </Button>
              </VStack>
            </Dialog.Footer>
          </form>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
}
