export class PanelBarItem {

    constructor(
        public title: string,
        public color?: string,
        public child?: PanelBarItem[],
        public expand?: boolean,
        public command?: Function,
        public isSelect?: boolean) { }
}

// export class PanelBarItem {

//     public title: string
//     public color?: string
//     public child?: PanelBarItem[]
//     public expand?: boolean
//     public command?: Function
//     public isSelect?: boolean
// }