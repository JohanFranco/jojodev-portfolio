import AnimatedCursor from "react-animated-cursor"

export const CustomCursor = () => {

      return (
<AnimatedCursor
      innerSize={10}
      outerSize={28}
      color='255, 255, 255'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={10}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />      )
}
