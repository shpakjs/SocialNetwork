export const updateObjectInArray = (items, itemId, objPropName, newObjectProps) => {
    items.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjectProps};
        }
    })
}