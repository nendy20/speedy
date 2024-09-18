import { IcartItem } from '@/types/IcartItem'
import { create } from 'zustand'


export interface IcarItemsStorage {
    Products: IcartItem[],
    items: number,
    clearCar: () => void
    addProductCount: (id: string) => void
    lessProductCount: (id: string) => void
    deleteProduct: (id: string) => void
}

export const useCarItemsStore = create<IcarItemsStorage>((set) => ({
    Products: [{
        name: 'Lácteos y Huevos',
        details: 'Huevos 30/1',
        price: 160,
        count: 4,
        id: "1",
        total: 640
    },],
    items: 1,
    clearCar: () => set(() => {
        return {
            items: 0,
            products: []
        }
    }),
    deleteProduct: (id) => set((state) => {

        const itemDelete = state.Products.filter((item: IcartItem) => id != item.id)
        return {
            Products: itemDelete,
            items: itemDelete.length
        }
    })
    ,
    addProductCount: (id) => set((state) => {
        const result = state.Products.map((item: IcartItem) =>
            item.id === id ? { ...item, count: item.count + 1 } : item)


        return {
            Products: result,
            items: result.length,
        }
    }),
    lessProductCount: (id) => set((state) => {
        const result = state.Products.map((item: IcartItem) =>
            item.id === id ? { ...item, count: item.count !== 1 ? item.count - 1 : item.count, } : item)


        return {
            Products: result,
            items: result.length,
        }
    }),

}))