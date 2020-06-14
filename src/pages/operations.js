import { LitElement, html } from 'lit-element';
import * as tf from '@tensorflow/tfjs';

class OperationsElement extends LitElement {

  constructor() {
    super();
    this.scalarTensor = tf.scalar(5);
    this.oneDTensor1 = tf.tensor1d([1, 2, 3, 4]);
    this.oneDTensor2 = tf.tensor1d([5, 6, 1, 2]);
    this.twoDTensor1 = tf.tensor2d([[2, 4], [4, 8]]);
    this.twoDTensor2 = tf.tensor2d([[4, 5], [8, 9]]);
  }

  render() {
    return html`
      <p>Basic Tensor operations. Open browser console to view results</p>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    console.log('Connected calllback');
    console.log('Executing math operations on tensors');
    this.multiplyTensors1();
    this.multiplyTensors2();
    this.multiplyTensors3();
    this.addTensor();
    this.substractTensor();
    this.max();
    this.min();
    this.slope(this.oneDTensor1, 2, 5);
    this.slope(this.twoDTensor1, 3, 8);
    this.getTensorData(this.oneDTensor1);
    this.getTensorData(this.twoDTensor1);
    this.normalizeTensors(this.oneDTensor1);
    tf.tidy(this.memoryLoop);
    console.log(tf.memory());
  }

  multiplyTensors1() {
    console.log('** multiplyTensors1**');
    const mulTensor = this.oneDTensor1.mul(this.scalarTensor);
    this.oneDTensor1.print();
    this.scalarTensor.print();
    mulTensor.print()
  }
  
  multiplyTensors2() {
    console.log('** multiplyTensors2**');
    const mulTensor = this.oneDTensor1.mul(this.oneDTensor2);
    this.oneDTensor1.print();
    this.oneDTensor2.print();
    mulTensor.print()
  }
  
  multiplyTensors3() {
    console.log('** multiplyTensors3**');
    const mulTensor = this.twoDTensor1.mul(this.twoDTensor2);
    this.twoDTensor1.print();
    this.twoDTensor2.print();
    mulTensor.print();
  }
  
  addTensor() {
    console.log('** addTensor**');
    const addTensor = this.oneDTensor1.add(this.oneDTensor2);
    this.oneDTensor1.print();
    this.oneDTensor2.print();
    addTensor.print()
  }
  
  substractTensor() {
    console.log('** substractTensor**');
    const addTensor = this.oneDTensor1.sub(this.oneDTensor2);
    this.oneDTensor1.print();
    this.oneDTensor2.print();
    addTensor.print()
  }
  
  max() {
    console.log('** max**');
    this.oneDTensor1.print();
    const max1 = this.oneDTensor1.max();
    max1.print();
    this.twoDTensor1.print();
    const max2 = this.twoDTensor1.max();
    max2.print();
  }
  
  min() {
    console.log('** min**');
    this.oneDTensor1.print();
    const min1 = this.oneDTensor1.min();
    min1.print();
    this.twoDTensor1.print();
    const min2 = this.twoDTensor1.min();
    min2.print();
  }
  
  slope(tx, m, c) {
    console.log(`**Slope** with m: ${m} & c: ${c}`);
    tx.print();
    const slopeTensor = tx.mul(tf.scalar(m)).add(tf.scalar(c));
    slopeTensor.print();
    return slopeTensor;
  }
  
  getTensorData(tensor) {
    console.log('**Inside getTensorData **');
    tensor.print();
    const tensorData = tensor.dataSync();
    console.log('tensorData', tensorData);
  }
  
  normalizeTensors(tensor) {
    console.log('**normalizeTensors**');
    tensor.print();
    const max = tensor.max();
    const min = tensor.min();
    const normalizedTensor = tensor.sub(min).div(max.sub(min));
    normalizedTensor.print();
  }
  
  memoryLoop() {
    console.log('**memoryLoop**');
    for (let i=0; i<100; i++) {
      tf.tensor1d([1, 2, 3]);
    }
    for (let i=0; i<100; i++) {
      tf.tensor1d([4, 5, 6])
    }
    console.log(tf.memory());
  }
}
customElements.define('operations-element', OperationsElement);
