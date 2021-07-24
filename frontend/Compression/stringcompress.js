var text = "some text"

var encodedByteArray = new TextEncoder().encode(text);

encodedByteArray
    > Uint8Array(9)[115, 111, 109, 101, 32, 116, 101, 120, 116]
var cs = new CompressionStream("gzip")

var cwriter = cs.writable.getWriter()

cwriter.write(encodedByteArray)

cwriter.close()

var compressedData

new Response(cs.readable).arrayBuffer().then(res => compressedData = res)

compressedData
    > ArrayBuffer(29)
compressedData.byteLength
    > 29
encodedByteArray.byteLength
    > 9
var dcs = new DecompressionStream("gzip")

var dwriter = dcs.writable.getWriter()

dwriter.write(compressedData)

dwriter.close()

var decompressedData;

new Response(dcs.readable).arrayBuffer().then(res => decompressedData = res)

decompressedData
    > ArrayBuffer(9)
decompressedData.byteLength
    > 9
var textD = new TextDecoder().decode(decompressedData)

textD
    > "some text"