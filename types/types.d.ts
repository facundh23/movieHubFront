import { ReactNode } from "react"

export type ModalProps  = {
    children: ReactNode,
    title:string,
    description:string
}

export type ContextProps = {
    children: ReactNode,
    handleShow: () => void
} 