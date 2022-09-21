import {
	Component,
	Input,
	ContentChildren,
	OnInit,
	Output,
	QueryList,
	AfterContentInit,
	EventEmitter,
	ContentChild
} from '@angular/core';
import {
	CellDirective,
	SortDirective,
	ActionsDirective,
	CustomEditDirective
} from './table.directive';

@Component({
	selector: 'wtable',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterContentInit {
	@Input() config: any = {};

	@Input() columns: any = [];

	@Input() rows: any = [];

	@Input() value = '_id';

	@ContentChildren(CellDirective) cell: QueryList<CellDirective>;

	@ContentChildren(SortDirective) sortHeaders: QueryList<SortDirective>;

	@ContentChild(ActionsDirective, { static: false }) action: any;

	@ContentChild(CustomEditDirective, { static: false }) editForm: any;

	@Output() onSearch = new EventEmitter();

	select_page_size = false;

	searching_text = '';

	custom_cell: any = {};

	sort_type: any = {};

	sortable: any = {};

	searchShow: any;

	doc: any;

	ngOnInit() {
		this.default_config();

		for (let i = 0; i < this.columns.length; i++) {
			if (typeof this.columns[i] === 'string') {
				this.columns[i] = {
					title: this.columns[i],
					field: this.columns[i]
				};
			}
		}

		this.init_doc_config();
	}

	default_config() {
		if (!this.config.pageSizeOptions) {
			this.config.pageSizeOptions = [5, 10, 25];
		}

		if (!this.config.perPage) {
			this.config.perPage = 5;
		}

		if (!this.config.page) {
			this.config.page = 1;
		}

		if (!this.config.searchable) {
			this.config.searchable = false;
		}
	}

	ngAfterContentInit() {
		for (let i = 0; i < this.sortHeaders.toArray().length; i++) {
			this.sortable[this.sortHeaders.toArray()[i].cell] = true;
		}

		for (let i = 0; i < this.cell.toArray().length; i++) {
			const cell = this.cell.toArray()[i];

			this.custom_cell[cell.cell] = cell.template;

			console.log('WE GOT IT');
		}

		console.log(this.cell, this.custom_cell);
	}

	next() {
		if (this.config.page * this.config.perPage < this.rows.length) {
			this.config.page += 1;
		}
	}

	previous() {
		if (this.config.page > 1) {
			this.config.page -= 1;
		}
	}

	changePerPage(row: any) {
		this.config.perPage = row;

		if ((this.config.page - 1) * this.config.perPage > this.rows.length) {
			this.lastPage();
		}

		this.select_page_size = false;
	}

	lastPage() {
		this.config.page = Math.ceil(this.rows.length / this.config.perPage);
	}

	isLast() {
		return (
			(this.rows &&
				this.config.page ==
					Math.ceil(this.rows.length / this.config.perPage)) ||
			false
		);
	}

	sort(column: any) {
		if (this.sort_type.title != column.title) {
			this.sort_type = {};
		}

		if (this.sortable[column.field]) {
			this.sort_type = {
				title: column.field,
				direction:
					(typeof this.sort_type.direction != 'string' && 'asc') ||
					(this.sort_type.direction == 'asc' && 'desc') ||
					undefined
			};
		}
	}

	init_doc_config() {
		if (typeof this.config.doc == 'string') {
			this.config.doc = this.config.doc.split(' ');
		}

		if (Array.isArray(this.config.doc)) {
			for (let i = 0; i < this.config.doc.length; i++) {
				if (typeof this.config.doc[i] == 'string') {
					this.config.doc[i] = {
						name: this.config.doc[i]
					};
				}
			}
		}
	}

	edit(doc: any = {}) {
		this.doc = doc || {};
	}

	submit() {
		if (this.doc[this.value] && typeof this.config.update === 'function') {
			this.config.update(this.doc);
		} else if (typeof this.config.create === 'function') {
			this.config.create(this.doc);
		}

		this.doc = null;
	}
}
