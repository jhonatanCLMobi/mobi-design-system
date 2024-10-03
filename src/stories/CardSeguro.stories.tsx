import { Meta, StoryFn } from '@storybook/react';
import CardSeguro from './CardSeguro';

export default {
  title: 'Components/CardSeguro',
  component: CardSeguro,
  parameters: {
    // layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ height: 250 }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],

} as Meta<typeof CardSeguro>;

const Template: StoryFn<typeof CardSeguro> = (args) => <CardSeguro {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Seguro',
  description: 'contra accidentes',
  isHover: false,
  pathImg: 'https://dev.d13yul9p634ddi.amplifyapp.com/assets/assets/benefits/seguro_hover.png',
};

export const Variante = Template.bind({});
Variante.args = {
  title: 'Seguro',
  description: 'contra accidentes',
  isHover: true,
  pathImg: 'https://dev.d13yul9p634ddi.amplifyapp.com/assets/assets/benefits/seguro_hover.png',
};
