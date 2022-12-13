import React, {FC, ReactElement} from 'react'
import {render, RenderOptions} from '@testing-library/react'
import { AppProviders } from './provider/AppProviders'




const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,

  //ui here is component we want to rendder
) => render(ui, {wrapper: AppProviders, ...options})

export * from '@testing-library/react'
export {customRender as render}