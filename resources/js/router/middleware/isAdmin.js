export default function isAdmin({ next, store }) {
    if (store.state.auth.role !== "Admin") {
        next({ name: store.state.auth.mainRoute });
    }

    return next();
}
