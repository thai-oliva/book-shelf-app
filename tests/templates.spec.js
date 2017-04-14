import { expect } from 'chai'
import React from 'react'
import ReactDOM from 'react-dom'
import {
	renderIntoDocument,
	findRenderedDOMComponentWithTag,
	findRenderedDOMComponentWithClass,
    scryRenderedComponentsWithType
    
} from 'react-dom/test-utils'
import Grid from '../src/template/grid'
import IconButton from '../src/template/iconButton'
import BookList from '../src/books/bookList'

describe('Templates tests', () => {
        it('should be render a grid',() => {
            const component = renderIntoDocument(
                <Grid />
            )

            const grid = findRenderedDOMComponentWithTag(component, 'div')
            expect(grid).to.be.ok
        })
        
        it('should render a booksList component for each todo item', () => {
            const books = [{
                    "items": [
                        {
                            "volumeInfo": {
                                "title": "Senhor Dos Aneis, O - a Sociedade Do Anel - Vol 1"
                            }
                        },
                        {
                            "volumeInfo": {
                                "title": "Senhor Dos Aneis"
                            }
                        }
                    ]
            }]
            const component = renderIntoDocument(
                <BookList
                    list={books}
                />
            )

                      
        })
})

