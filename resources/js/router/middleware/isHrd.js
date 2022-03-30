export default function isHrd({ next, store }) {
    if (store.state.auth.role !== "HRD") {
        next({ name: store.state.auth.mainRoute });
    }

    return next();
}
