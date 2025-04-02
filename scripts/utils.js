export function mergeVidpid(vendorId, productId) {
    return vendorId * 65536 + productId
}

export function getOutputPath() {
    return 'dist'
}