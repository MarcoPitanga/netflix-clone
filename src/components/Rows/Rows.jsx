import React from 'react'
import categories from '../../api/api'
import { Row } from '../Row/Row'
export const Rows = () => {
  return (
    <>
      {categories.map((category) => {
        return <Row key={category.name} title={category.title} path={category.path} isLarge={category.isLarge} />
      })}
    </>
  )
}
