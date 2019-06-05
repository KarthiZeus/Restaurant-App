import {RESTAURANT} from '../utility/action-types'

export const addItem = ItemId => {
  return {
    type: RESTAURANT.ADD_ITEM,
    payload: ItemId
  }
}