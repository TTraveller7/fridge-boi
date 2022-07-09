insert into Category(description, max_store_days)
values ('others', null), ('eggs', 35), ('milk', 3), ('bacon', 7), ('Fresh beef, veal, lamb, pork', 5);

insert into Food(description, amount, best_before_date, food_state, category_id)
values ('eggs', '1', '2022-07-23', 'STORED', '1'), ('pork', '1', '2022-07-09', 'STORED', '4');