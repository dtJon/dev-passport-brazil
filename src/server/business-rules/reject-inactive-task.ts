import { gs, GlideRecord } from '@servicenow/glide'

export function rejectInactiveTask(current: GlideRecord<'x_736034_dev_pass_hello_world'>, previous: GlideRecord<'x_736034_dev_pass_hello_world'>) {
    gs.addErrorMessage('Hello CMA Fall 2026!');
    current.setAbortAction(true)
}
