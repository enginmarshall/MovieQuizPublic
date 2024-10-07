// Umbraco structure
export interface UmbracoInstructionsRoot {
    total: number
    items: UmbracoInstruction[]
}

export interface UmbracoInstruction {
    contentType: string
    name: string
    createDate: string
    updateDate: string
    route: Route
    id: string
    properties: Properties
    cultures: Cultures
}

export interface Route {
    path: string
    startItem: StartItem
}

export interface StartItem {
    id: string
    path: string
}

export interface Properties {
    instructionText: InstructionText
}

export interface InstructionText {
    markup: string
    blocks: any[]
}

export interface Cultures { }
