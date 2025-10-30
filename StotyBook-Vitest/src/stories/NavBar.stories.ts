import type {Meta, StoryObj} from "@storybook/react-vite"
import NavBar from '../NavBar.tsx'

const meta : Meta<typeof NavBar>={
    component: NavBar,
    title: 'UI/NavBar',
    tags: ['autodocs'],
    parameters: {
    layout: 'centered', // Centers the component preview
  }
};

export default meta;
type Story = StoryObj<typeof NavBar>;

// Default story
export const Default: Story = {
  args: {
    logo: 'MyLogo',
    placeholder: 'Search...',
  },
};

// You can add more variants
export const CustomLogo: Story = {
  args: {
    logo: 'Harsh Yaduvanshi',
    placeholder: 'Find items...',
  },
};

export const Minimal: Story = {
  args: {
    logo: 'Mini',
    placeholder: 'Type here...',
  },
};