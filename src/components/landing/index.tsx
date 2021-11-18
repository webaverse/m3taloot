import { styled } from 'emotion-solid'
import tw from 'twin.macro'
import withDefaults from '../../utils/with-defaults'
import type { Component, JSX } from 'solid-js'



export type ElementStyledProps = {
  [key: string]: any,
  type?: any,
  border?: string,
  color?: any,
  shape?: any,
  shadow?: boolean,
  imagePath?: string,
  text?: string,
  DISABLED?: boolean
}



/***********************************************LAYER-0*****************************************/
const baseStyles_0 = tw`outline-none flex w-16 h-4 bg-bf8415 pl-5 pr-5 pb-2 pt-2 rounded-custom`

const errorStyles_0 = () => ({
  minWidth: '69px',
  minHeight: '16px',
  blendMode: 'normal'
});

const stateStyles_0 = ({ DISABLED }: ElementStyledProps) => [
  DISABLED && tw`bg-231f1f`,
]

const LayerStyled_0 = styled('a')<ElementStyledProps>(
  baseStyles_0,
  stateStyles_0,
  errorStyles_0
)
/***********************************************LAYER-0*****************************************/




/***********************************************LAYER-1*****************************************/
const baseStyles_1 = tw`outline-none flex w-16 h-4`

const errorStyles_1 = () => ({

});

const stateStyles_1 = ({ DISABLED }: ElementStyledProps) => []

const LayerStyled_1 = styled('span')<ElementStyledProps>(
  baseStyles_1,
  stateStyles_1,
  errorStyles_1
)
/***********************************************LAYER-1*****************************************/




/***********************************************LAYER-2*****************************************/
const baseStyles_2 = tw`outline-none flex w-12 h-4 ml-0 mt-0 mb-0 text-gray-100 text-xs font-medium text-center not-italic tracking-normal`

const errorStyles_2 = () => ({
  minWidth: '47px',
  minHeight: '16px',
  fontFamily: 'inter',
  lineHeight: '142.22222328186035%'
});

const stateStyles_2 = ({ DISABLED }: ElementStyledProps) => [
  DISABLED && tw`text-gray-700`,
]
const LayerStyled_2 = styled('span')<ElementStyledProps>(
  baseStyles_2,
  stateStyles_2,
  errorStyles_2
)
/***********************************************LAYER-2*****************************************/




/***********************************************LAYER-3*****************************************/
const baseStyles_3 = tw`outline-none flex w-4 h-4 ml-12 mt-0 mb-0 overflow-hidden absolute`

const errorStyles_3 = () => ({
  minWidth: '16px',
  minHeight: '16px',
  backgroundColor: '',
  blendMode: ''
});

const stateStyles_3 = ({ DISABLED }: ElementStyledProps) => []

const LayerStyled_3 = styled('span')<ElementStyledProps>(
  baseStyles_3,
  stateStyles_3,
  errorStyles_3
)
/***********************************************LAYER-3*****************************************/




/***********************************************LAYER-4*****************************************/
const baseStyles_4 = tw`outline-none absolute w-2 h-2 ml-1 flex`

const errorStyles_4 = () => ({
  svg: {
    color: 'green'
  },
  top: '3.33349609375px',
  fill: '#fcfafaff'
});

const stateStyles_4 = ({ DISABLED }: ElementStyledProps) => [
]

const LayerStyled_4 = styled('span')<ElementStyledProps>(
  baseStyles_4,
  stateStyles_4,
  errorStyles_4
)

const LayerStyled_5 = styled(LayerStyled_4)<ElementStyledProps>(baseStyles_4,stateStyles_4,errorStyles_4);
/***********************************************LAYER-4*****************************************/




const ButtonElement: Component<ElementStyledProps> = (props) => {

  let partialState: any = {};
  partialState.DISABLED = true && props.DISABLED;


  return (
    <LayerStyled_0 class="group "  {...props} {...partialState}>
      <LayerStyled_1 class="group "  {...props} {...partialState}>
        <LayerStyled_2 class="" {...props} {...partialState}>
          {props.characters || 'Button'}
        </LayerStyled_2>
        <LayerStyled_3 class=""  {...props} {...partialState}>
          <LayerStyled_5 class="" {...props} {...partialState}> 
            {props.icon || <svg preserveAspectRatio="none" width="10" height="10" viewBox="0 0 10 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10 5.71429H5.71429V10H4.28571V5.71429H0V4.28571H4.28571V0H5.71429V4.28571H10V5.71429Z" /></svg>} 

           </LayerStyled_5> 
        </LayerStyled_3>
      </LayerStyled_1>
    </LayerStyled_0>
  )
};

export const Button = withDefaults(ButtonElement, {
  type: 'filled',
  shape: 'square',
  color: 'primary',
  characters: undefined,
  DISABLED: false
});