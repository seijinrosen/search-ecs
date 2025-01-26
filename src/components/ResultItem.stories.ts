import type { Meta, StoryObj } from "@storybook/react";

import { ResultItem } from "./ResultItem";

const meta = {
  component: ResultItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ResultItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    icon: "🚀",
    name: "Example",
    showUrl: true,
    url: "https://example.com",
  },
};
