const { MerkleTree } = require('merkletreejs')
const SHA256 = require('crypto-js/sha256')

const leaves = [
  '0x1111111111111111111111111111111111111111',
  '0x2222222222222222222222222222222222222222',
  '0x3333333333333333333333333333333333333333',
  '0x4444444444444444444444444444444444444444',
  '0x5555555555555555555555555555555555555555'
].map(x => SHA256(x))


const tree = new MerkleTree(leaves, SHA256)

const root = tree.getRoot().toString('hex')

const address = '0x33333333333333333333333333333333333333ab'

const leaf = SHA256(address)

const proof = tree.getProof(leaf)

console.log(tree.verify(proof, leaf, root))
