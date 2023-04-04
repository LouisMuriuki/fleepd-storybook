import { Meta, StoryObj } from "@storybook/react";
import Accordion from "./Accordion";

const meta = {
  title: "Component/Accordion",
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "React Accordion Component",
    content:
      "This is an Accordion component build exclusively  for the Fleepd team. I hope they like it",
  },
};

export const WithPurpleText: Story = {
  args: {
    title: "React Accordion Component",
    content:
      "This is an Accordion component build exclusively  for the Fleepd team. I hope they like it",
      color: 'text-purple-500',
      titleSize: 'text-xl',
      contentSize: 'text-base',
      borderRadius: 'rounded-md',
      border: 'border',
      padding: 'py-3 px-6',
      margin: 'my-2',
  },
};
export const WithBlueText: Story = {
  args: {
    title: "React Accordion Component",
    content:
      "This is an Accordion component build exclusively  for the Fleepd team. I hope they like it",
    color: "text-blue-500",
    titleSize: "text-2xl",
    contentSize: "text-lg",
    borderRadius: "rounded",
    border: "border-2",
    padding: "p-4",
    margin: "my-4",
  },
};
