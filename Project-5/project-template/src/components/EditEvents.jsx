import { useForm } from "react-hook-form";
import {
  Button,
  Input,
  Textarea,
  VStack,
  Field,
  Dialog,
  Checkbox,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useEvents } from "../Context/Context";
import { useRevalidator } from "react-router-dom";
import { toaster } from "../components/ui/toaster";
export default function EditEvents() {
  const { edit, setEdit, selectedEvent } = useEvents();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const { revalidate } = useRevalidator();
  useEffect(() => {
    if (selectedEvent) {
      reset({
        title: selectedEvent.title,
        description: selectedEvent.description,
        image: selectedEvent.image,
        startTime: selectedEvent.startTime,
        endTime: selectedEvent.endTime,
        category: selectedEvent.categoryIds?.[0],
      });
    }
  }, [selectedEvent, reset]);

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
            categoryIds: [Number(data.category)],
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
    <Dialog.Root open={edit} onOpenChange={(e) => setEdit(e.open)}>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.Header fontWeight="bold" fontSize="20px">
            Edit Event Form
          </Dialog.Header>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Dialog.Body>
              <Field.Root invalid={errors.title} mt={2}>
                <Field.Label>Title:</Field.Label>
                <Input
                  type="text"
                  {...register("title", {
                    required: "title is required",
                  })}
                />
                <Field.ErrorText>{errors.title?.message}</Field.ErrorText>
              </Field.Root>

              <Field.Root invalid={errors.description} mt={4}>
                <Field.Label>Description</Field.Label>
                <Textarea
                  placeholder="Write your description..."
                  {...register("description", {
                    required: "description is required",
                  })}
                />
                <Field.ErrorText>{errors.description?.message}</Field.ErrorText>
              </Field.Root>
              <Field.Root invalid={errors.image} mt={4}>
                <Field.Label>Image URL: </Field.Label>
                <Input
                  type="url"
                  placeholder="Write source url ."
                  {...register("image", {
                    required: "image is required",
                  })}
                />
                <Field.ErrorText>{errors.image?.message}</Field.ErrorText>
              </Field.Root>
              <Field.Root invalid={errors.startTime} mt={4}>
                <Field.Label>Start Time:</Field.Label>
                <Input
                  type="datetime-local"
                  placeholder="Write start time(2026-03-16T20:35:45) ."
                  {...register("startTime", {
                    required: "Start Time  is required",
                  })}
                />
                <Field.ErrorText>{errors.startTime?.message}</Field.ErrorText>
              </Field.Root>
              <Field.Root invalid={errors.endTime} mt={4}>
                <Field.Label>End Time:</Field.Label>
                <Input
                  type="datetime-local"
                  placeholder="Write End time(2026-03-16T20:35:45) ."
                  {...register("endTime", {
                    required: "End Time  is required",
                  })}
                />
                <Field.ErrorText>{errors.endTime?.message}</Field.ErrorText>
              </Field.Root>
              <Field.Root invalid={errors.categoryIds} mt={4}>
                <Field.Label>Categories:</Field.Label>

                <VStack align="start" spacing={2}>
                  {[
                    { id: 1, name: "Sports" },
                    { id: 2, name: "Games" },
                    { id: 3, name: "Relaxation" },
                  ].map((category) => (
                    <Checkbox.Root
                      key={category.id}
                      value={category.id}
                      {...register("categoryIds", {
                        required: "Select at least one category",
                      })}
                    >
                      <Checkbox.HiddenInput />
                      <Checkbox.Control />
                      <Checkbox.Label>{category.name}</Checkbox.Label>
                    </Checkbox.Root>
                  ))}
                </VStack>

                <Field.ErrorText>{errors.categoryIds?.message}</Field.ErrorText>
              </Field.Root>
            </Dialog.Body>

            <Dialog.Footer>
              <VStack w="full" spacing={3}>
                <Button
                  variant="outline"
                  width="full"
                  type="button"
                  onClick={() => setEdit(false)}
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  colorScheme="blue"
                  isLoading={isSubmitting}
                  width="full"
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
