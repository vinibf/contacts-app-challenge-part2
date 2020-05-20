import React from 'react';

class Filters extends React.Component {
	render() {
        const { sortingCategory, handleChangeSearch, handleClickSort } = this.props;

		return (
			<div className="container" data-testid="filters">
				<section className="filters">
					<div className="filters__search">
						<input
                            type="text"
                            className="filters__search__input"
                            placeholder="Pesquisar"
                            onChange={e => handleChangeSearch(e.target.value)}
                        />

						<button className="filters__search__icon">
							<i className="fa fa-search"/>
						</button>
					</div>

					<button
                        className="filters__item"
                        onClick={e => {
                            const target = e.target;
                            const currentCategory = "name";

                            if (sortingCategory !== currentCategory) {
                                if (sortingCategory) {
                                    for (const element of target.parentElement.children) {
                                        if (element.classList.contains("is-selected")) {
                                            element.classList.remove("is-selected");
                                        }
                                    }
                                }
                                target.classList.toggle("is-selected");
                            }

                            handleClickSort(currentCategory);
                        }}
                    >
						Nome <i className="fas fa-sort-down" />
					</button>

					<button
                        className="filters__item"
                        onClick={e => {
                            const target = e.target;
                            const currentCategory = "country";

                            if (sortingCategory !== currentCategory) {
                                if (sortingCategory) {
                                    for (const element of target.parentElement.children) {
                                        if (element.classList.contains("is-selected")) {
                                            element.classList.remove("is-selected");
                                        }
                                    }
                                }
                                target.classList.toggle("is-selected");
                            }

                            handleClickSort(currentCategory);
                        }}
                    >
						País <i className="fas fa-sort-down" />
					</button>

					<button
                        className="filters__item"
                        onClick={e => {
                            const target = e.target;
                            const currentCategory = "company";

                            if (sortingCategory !== currentCategory) {
                                if (sortingCategory) {
                                    for (const element of target.parentElement.children) {
                                        if (element.classList.contains("is-selected")) {
                                            element.classList.remove("is-selected");
                                        }
                                    }
                                }
                                target.classList.toggle("is-selected");
                            }

                            handleClickSort(currentCategory);
                        }}
                    >
						Empresa <i className="fas fa-sort-down" />
					</button>

					<button
                        className="filters__item"
                        onClick={e => {
                            const target = e.target;
                            const currentCategory = "department";

                            if (sortingCategory !== currentCategory) {
                                if (sortingCategory) {
                                    for (const element of target.parentElement.children) {
                                        if (element.classList.contains("is-selected")) {
                                            element.classList.remove("is-selected");
                                        }
                                    }
                                }
                                target.classList.toggle("is-selected");
                            }

                            handleClickSort(currentCategory);
                        }}
                    >
						Departamento <i className="fas fa-sort-down" />
					</button>

					<button
                        className="filters__item"
                        onClick={e => {
                            const target = e.target;
                            const currentCategory = "admissionDate";

                            if (sortingCategory !== currentCategory) {
                                if (sortingCategory) {
                                    for (const element of target.parentElement.children) {
                                        if (element.classList.contains("is-selected")) {
                                            element.classList.remove("is-selected");
                                        }
                                    }
                                }
                                target.classList.toggle("is-selected");
                            }

                            handleClickSort(currentCategory);
                        }}
                    >
						Data de admissão <i className="fas fa-sort-down" />
					</button>
				</section>
			</div>
		);
	}
}

export default Filters;
