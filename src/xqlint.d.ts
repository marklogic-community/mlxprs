/** Declaration file generated by dts-gen */
declare module 'xqlint' {

    export class XQLint {
        constructor(source: string, opts?: any);
        getCompletions(docpos: docpos): completion[];
        getAST(): node;
    }


    export namespace TreeOps {
    }

    export interface docpos {
        line: number,
        col: number
    }

    export interface completion {
        meta: string,
        name: string,
        value: string
    }

    export interface token {
        type: string,
        value: string
    }

    export interface node {
        name: string,
        children: node[],
        index: node[],
        pos: {
            sl: number, sc: number, el: number, ec: number
        },
        getParent: () => node,
        value?: string
    }
}
