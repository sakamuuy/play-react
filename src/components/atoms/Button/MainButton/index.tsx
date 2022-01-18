import { css } from '@emotion/react'

export function MainButton() {
  const color = 'white'
  return (
    <div
    css={css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
      &:hover {
        color: ${color};
      }
    `}
  >
    Hover to change color.
  </div>
  )
}