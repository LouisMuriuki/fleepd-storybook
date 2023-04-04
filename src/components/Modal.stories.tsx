import { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";

const meta = {
  title: "Component/Modal",
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        isOpen:true,
        onClose:() => {},
        title:"My Modal",
        content:"This is a Modal component build exclusively  for the Fleepd team. I hope they like it",
        backgroundColor : 'bg-white',
        textColor : 'text-gray-800',
        headerBackgroundColor : 'bg-gray-100',
        headerTextColor : 'text-gray-800',
        width : 'max-w-lg',
        height : 'h-auto',
        borderRadius : 'rounded-lg',
        padding : 'p-4',
    },
  };
export const withSmallerWidth: Story = {
    args: {
        isOpen:true,
        onClose:() => {},
        title:"My Modal",
        content:"This is a Modal component build exclusively  for the Fleepd team. I hope they like it",
        backgroundColor : 'bg-white',
        textColor : 'text-gray-800',
        headerBackgroundColor : 'bg-gray-100',
        headerTextColor : 'text-gray-800',
        width : 'max-w-xs',
        height : 'h-auto',
        borderRadius : 'rounded-lg',
        padding : 'p-4',
    },
  };
export const withOrangeHeaderBackground: Story = {
    args: {
        isOpen:true,
        onClose:() => {},
        title:"My Modal",
        content:"This is a Modal component build exclusively  for the Fleepd team. I hope they like it",
        backgroundColor : 'bg-white',
        textColor : 'text-gray-800',
        headerBackgroundColor : 'bg-[orange]',
        headerTextColor : 'text-gray-800',
        width : 'max-w-lg',
        height : 'h-auto',
        borderRadius : 'rounded-lg',
        padding : 'p-4',
    },
  };