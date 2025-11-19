import { useContext, type Context } from 'react';

export const useCustomContext = <T>(
    ctx: Context<T | null>,
    ctxName: string
) => {
    const context = useContext(ctx);

    if (!context) {
        throw new Error(`${ctxName} is null. This should not be the case.`);
    }

    return context;
};
