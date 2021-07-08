======== Structure  ========
1. button
2. input
3. select
5. textarea
6. switch
4. radio
7. checkbox
8. table

1. ==== button ====
<button class="btn _primary">Add</button>
<button class="btn _second">Cancel</button>
<button class="btn _danger">Delete</button>

2. ==== input ====
 <div class="forms">
	<span class="forms__title">Text</span>
	<input class="forms__input" type="text" name="text" placeholder="Your text">
</div>

3. ==== select ====
<div class="forms">
	<span class="forms__title">Name</span>
	<span class="forms__chevron material-icons">expand_more</span>
	<select class="forms__select">
		<option value="Default">Default</option>
	</select>
</div>

4. ==== textarea ====
<div class="forms">
	<span class="forms__title">Text</span>
	<textarea class="forms__textarea" placeholder="Text"></textarea>
</div>

5. ==== switch ====
<label class="switch">
	<div class="switch__toggle">
		<input class="switch__input" type="checkbox">
		<span class="switch__slider _round"></span>
	</div>
	<div class="switch__text">Sound notification</div>
</label>

6. ==== checkbox ====
<label class="checkbox">
	<input class="checkbox__input" type="checkbox" name="text">
	<div class="checkbox__body">
		<span class="checkbox__svg"><svg width="12px" height="10px"><use xlink:href="#check"></use></svg></span>
		<span class="checkbox__text">Text</span>
	</div>
</label>

<!-- Checkbox SVG Sprites - put one time on page-->
<svg class="checkbox__svg-icon">
    <symbol id="check" viewbox="0 0 12 10">
        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
    </symbol>
</svg>


7. ==== radio ====
<label class="radio">
	<input type="radio" name="text" class="radio__input">
	<span class="radio__label"></span>
	<div class="radio__text">Text</div>
</label>


8. ==== waw table ====
<div class="table-wrapp">
	<table class="table" cellpadding="0" cellspacing="0">
		<thead>
			<tr>
				<th scope="col">Clients</th>
				<th scope="col">Address</th>
				<th scope="col">Email</th>
				<th scope="col">Phone</th>
				<th scope="col">additional phone</th>
				<th scope="col">Gender</th>
				<th scope="col">Date of birth</th>
			</tr>
		</thead>
		<tbody>
			<tr *ngFor="let item of [{},{},{},{},{},{},{},{},{},{},{}]">
				<td data-label="Clients">
					<div class="cl-table-clients">
						<div class="cl-table-clients__img"><img src="assets/img/user.jpg" alt="user avatar" /></div>
						<div class="cl-table-clients__info">
							<div class="cl-table-clients__name">Anna Korsun</div>
							<div class="cl-table-clients__desc">#65ghd4</div>
						</div>
					</div>
				</td>
				<td data-label="Address">Street of Blue Flowers 23</td>
				<td data-label="Email">korsun_anna@gmail.com</td>
				<td data-label="Phone">(201) 555-0124</td>
				<td data-label="phone 2">(201) 555-0124</td>
				<td data-label="Gender">Woman</td>
				<td data-label="birth">2.05.1978</td>
			</tr>
		</tbody>
	</table>
</div>
