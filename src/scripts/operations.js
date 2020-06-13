import * as tf from '@tensorflow/tfjs';

const scalarTensor = tf.scalar(5);
const oneDTensor1 = tf.tensor1d([1, 2, 3, 4]);
const oneDTensor2 = tf.tensor1d([5, 6, 1, 2]);
const twoDTensor1 = tf.tensor2d([[2, 4], [4, 8]]);
const twoDTensor2 = tf.tensor2d([[4, 5], [8, 9]]);

function multiplyTensors1() {
  console.log('**Function multiplyTensors1**');
  const mulTensor = oneDTensor1.mul(scalarTensor);
  oneDTensor1.print();
  scalarTensor.print();
  mulTensor.print()
}

function multiplyTensors2() {
  console.log('**Function multiplyTensors2**');
  const mulTensor = oneDTensor1.mul(oneDTensor2);
  oneDTensor1.print();
  oneDTensor2.print();
  mulTensor.print()
}

function multiplyTensors3() {
  console.log('**Function multiplyTensors3**');
  const mulTensor = twoDTensor1.mul(twoDTensor2);
  twoDTensor1.print();
  twoDTensor2.print();
  mulTensor.print();
}

function addTensor() {
  console.log('**Function addTensor**');
  const addTensor = oneDTensor1.add(oneDTensor2);
  oneDTensor1.print();
  oneDTensor2.print();
  addTensor.print()
}

function substractTensor() {
  console.log('**Function substractTensor**');
  const addTensor = oneDTensor1.sub(oneDTensor2);
  oneDTensor1.print();
  oneDTensor2.print();
  addTensor.print()
}

function max() {
  console.log('**Function max**');
  oneDTensor1.print();
  const max1 = oneDTensor1.max();
  max1.print();
  twoDTensor1.print();
  const max2 = twoDTensor1.max();
  max2.print();
}

function min() {
  console.log('**Function min**');
  oneDTensor1.print();
  const min1 = oneDTensor1.min();
  min1.print();
  twoDTensor1.print();
  const min2 = twoDTensor1.min();
  min2.print();
}

function slope(tx, m, c) {
  console.log(`**Slope** with m: ${m} & c: ${c}`);
  tx.print();
  const slopeTensor = tx.mul(tf.scalar(m)).add(tf.scalar(c));
  slopeTensor.print();
  return slopeTensor;
}

function getTensorData(tensor) {
  console.log('**Inside getTensorData function**');
  tensor.print();
  const tensorData = tensor.dataSync();
  console.log('tensorData', tensorData);
}

function normalizeTensors(tensor) {
  console.log('**normalizeTensors**');
  tensor.print();
  const max = tensor.max();
  const min = tensor.min();
  const normalizedTensor = tensor.sub(min).div(max.sub(min));
  normalizedTensor.print();
}

function memoryLoop() {
  console.log('**memoryLoop**');
  for (let i=0; i<100; i++) {
    tf.tensor1d([1, 2, 3]);
  }
  for (let i=0; i<100; i++) {
    tf.tensor1d([4, 5, 6])
  }
  console.log(tf.memory());
}

export default () => {
  console.log('Executing math operations on tensors');
  multiplyTensors1();
  multiplyTensors2();
  multiplyTensors3();
  addTensor();
  substractTensor();
  max();
  min();
  slope(oneDTensor1, 2, 5);
  slope(twoDTensor1, 3, 8);
  getTensorData(oneDTensor1);
  getTensorData(twoDTensor1);
  normalizeTensors(oneDTensor1);
  tf.tidy(memoryLoop);
  console.log(tf.memory());
}
