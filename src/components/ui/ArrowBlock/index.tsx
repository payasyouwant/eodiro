import './style.scss'

import { ArrowIcon } from '@/components/global/icons'
import React from 'react'
import mergeClassNames from '@/modules/merge-class-name'

export interface ArrowBlockProps {
  className?: string
  noArrow?: boolean
  flat?: boolean
  customPadding?: boolean
}

export const ArrowBlock: React.FC<ArrowBlockProps> = ({
  className,
  noArrow = false,
  flat = false,
  children,
  customPadding = false,
}) => {
  return (
    <div
      className={mergeClassNames(
        'arrow-block',
        className,
        !flat && 'unflat',
        customPadding && 'custom-padding'
      )}
    >
      <div className="ab-body">{children}</div>
      {!noArrow && (
        <div className="ab-arrow-container">
          <ArrowIcon direction="right" className="ab-arrow" />
        </div>
      )}
    </div>
  )
}
