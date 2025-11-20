import { useContext, type Context } from 'react';

export const useCustomContext = <T>(
    ctx: Context<T | null>,
    ctxName: string
) => {
    const context = useContext(ctx);

    if (!context) {
        throw new Error(`${ctxName} was used outside of its Provider`);
    }

    return context;
};
