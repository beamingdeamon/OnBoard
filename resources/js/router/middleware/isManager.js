export default function isAdmin({ next, store }) {
    if (store.state.auth.role !== "Manager") {
        next({ name: store.state.auth.mainRoute });
    }

    return next();
}
