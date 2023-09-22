import Header from './../header/Header';
import './Documents.scss';

import pdfDoc from './../../resources/show_document.pdf'

function Documents() {

	let heightDocument = 200
	let widthDocument
	if (window.screen.height) {
		heightDocument = window.screen.height - 400
		widthDocument = heightDocument / 1.4142
	}



	return (
		<>
			<Header />
			<div className="doc">

				<div className="doc-container">
					<embed src={pdfDoc}
						height={heightDocument + 'px'}
						width={widthDocument + 'px'}
					/>

				</div>
			</div>
		</>
	);
}

export default Documents;
