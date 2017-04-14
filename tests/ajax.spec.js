import axios from 'axios';
import sinon from 'sinon';
import { expect } from 'chai';
const URL = 'https://www.googleapis.com/books/v1/volumes';

describe('Make ajax api', () => {
	beforeEach(() => {
		sinon.stub(axios, 'get')
	});

	afterEach(() => {
		axios.get.restore()
	});

	it('should make a call for google API', () => {
		const makeAjax = function() {
			const urltest = 'floripa'
			const googleApiUrl = `${URL}?q=${urltest}`

			return axios.get(googleApiUrl);
		};
		makeAjax();

		expect(axios.get.callCount).to.equal(1)
	});

	it('should make a call for google API with 2 or more words', () => {
		const makeAjax = function() {
			const urltest = encodeURIComponent('senhor aneis')
			const googleApiUrl = `${URL}?q=${urltest}`

			return axios.get(googleApiUrl);
		};
		makeAjax();

		expect(axios.get.callCount).to.equal(1)
	});
});