/**
 * Interface to adapt something to custom models
 */
export interface Adapter<T> {
    /**
     * Convert item to adapter type
     *
     * @param item1 item1 to convert
     * @param item2 item2 to convert
     */
    adapt(item1: any, item2?: string): T;
}
