export const MsgFlowTypes = {
    message: 'message',

} as const;

export type MsgFlowType = (typeof MsgFlowTypes)[keyof typeof MsgFlowTypes];

export type MsgInputNodeData = {
    value?: string,
}

export type MsgFlowNodeData = {
    value?: string | number;
    type?: MsgFlowType;
    sourceHandles?: string[];
};