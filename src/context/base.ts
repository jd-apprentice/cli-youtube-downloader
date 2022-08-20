
// ------------------------BASE STRATEGY---------------------------------------- //
export interface ActionStrategy {
    execute(): void;
}

// ------------------------CONTEXT---------------------------------------- //
export class Context {
    private action: ActionStrategy;

    constructor(action: ActionStrategy) {
        this.action = action;
    }

    public setAction(action: ActionStrategy): void {
        this.action = action;
    }

    public executeAction(): void {
        this.action.execute();
    }
}