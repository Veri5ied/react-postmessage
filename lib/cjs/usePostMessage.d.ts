export declare const usePostMessage: (options?: {
    targetOrigin: string;
}) => (message: string | number | boolean | null | undefined | object | Array<string | number | boolean | null | undefined | object>) => void;
export declare const useReceiveMessage: (options?: {
    targetOrigin: string;
}) => (callback: (message: string) => void) => () => void;
