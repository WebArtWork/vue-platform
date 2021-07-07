======== Structure  ========
1. waw button
2. waw input
3. waw checkbox
4. waw radio
5. waw textarea
6. waw switch
7. waw nav
8. waw table


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
5. ==== textarea ====
<div class="forms">
	<span class="forms__title">Text</span>
	<textarea class="forms__textarea" placeholder="Text"></textarea>
</div>

6. ==== switch ====
<label class="switch">
	<div class="switch__toggle">
		<input class="switch__input" type="checkbox">
		<span class="switch__slider _round"></span>
	</div>
	<div class="switch__text">Sound notification</div>
</label>



3. ====  waw checkbox ====
<label class="waw-checkbox">
	<span class="waw-checkbox___title">Title</span>
	<input name="Name" type="checkbox" disabled>
	<span class="checkmark"></span>
</label>

4. ==== waw radio ====
<label for="name1" class="waw-radio">
	<span class="waw-radio__title">Title</span>
	<input id="name1" name="radio" type="radio" checked="checked">
	<span class="checkmark"></span>
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
