'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">advance-concepts documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminModule-b8c87ce86043b3622f5ce8f4a39f3e2b88a6db5946246569e6b9655a0d0b5383119156279f9ec43e6feb9b2fa9138256522edea368a3047db9a03dfc0e9e1266"' : 'data-target="#xs-components-links-module-AdminModule-b8c87ce86043b3622f5ce8f4a39f3e2b88a6db5946246569e6b9655a0d0b5383119156279f9ec43e6feb9b2fa9138256522edea368a3047db9a03dfc0e9e1266"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-b8c87ce86043b3622f5ce8f4a39f3e2b88a6db5946246569e6b9655a0d0b5383119156279f9ec43e6feb9b2fa9138256522edea368a3047db9a03dfc0e9e1266"' :
                                            'id="xs-components-links-module-AdminModule-b8c87ce86043b3622f5ce8f4a39f3e2b88a6db5946246569e6b9655a0d0b5383119156279f9ec43e6feb9b2fa9138256522edea368a3047db9a03dfc0e9e1266"' }>
                                            <li class="link">
                                                <a href="components/BotAddEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BotAddEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BotListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BotListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FaqAddEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FaqAddEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FaqListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FaqListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link" >AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-e31d3a6ca235670df8aa97042e077038e9adf62596b736b8f4106c9e702306108a854305ee817a921f8c09b9ec5c94e11179da09cdf6a9e9bff52ee81c4a7107"' : 'data-target="#xs-components-links-module-AppModule-e31d3a6ca235670df8aa97042e077038e9adf62596b736b8f4106c9e702306108a854305ee817a921f8c09b9ec5c94e11179da09cdf6a9e9bff52ee81c4a7107"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-e31d3a6ca235670df8aa97042e077038e9adf62596b736b8f4106c9e702306108a854305ee817a921f8c09b9ec5c94e11179da09cdf6a9e9bff52ee81c4a7107"' :
                                            'id="xs-components-links-module-AppModule-e31d3a6ca235670df8aa97042e077038e9adf62596b736b8f4106c9e702306108a854305ee817a921f8c09b9ec5c94e11179da09cdf6a9e9bff52ee81c4a7107"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-67c9026fc1a94e0305ee1c0341daa35e2180f3dfd314cdb9bbd01a9e9b7785691411f3c7eea482ec3ecddc272cb437ec2773b626114fcc38a22e3c31066c6dee"' : 'data-target="#xs-components-links-module-AuthModule-67c9026fc1a94e0305ee1c0341daa35e2180f3dfd314cdb9bbd01a9e9b7785691411f3c7eea482ec3ecddc272cb437ec2773b626114fcc38a22e3c31066c6dee"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-67c9026fc1a94e0305ee1c0341daa35e2180f3dfd314cdb9bbd01a9e9b7785691411f3c7eea482ec3ecddc272cb437ec2773b626114fcc38a22e3c31066c6dee"' :
                                            'id="xs-components-links-module-AuthModule-67c9026fc1a94e0305ee1c0341daa35e2180f3dfd314cdb9bbd01a9e9b7785691411f3c7eea482ec3ecddc272cb437ec2773b626114fcc38a22e3c31066c6dee"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignupComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-67c9026fc1a94e0305ee1c0341daa35e2180f3dfd314cdb9bbd01a9e9b7785691411f3c7eea482ec3ecddc272cb437ec2773b626114fcc38a22e3c31066c6dee"' : 'data-target="#xs-injectables-links-module-AuthModule-67c9026fc1a94e0305ee1c0341daa35e2180f3dfd314cdb9bbd01a9e9b7785691411f3c7eea482ec3ecddc272cb437ec2773b626114fcc38a22e3c31066c6dee"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-67c9026fc1a94e0305ee1c0341daa35e2180f3dfd314cdb9bbd01a9e9b7785691411f3c7eea482ec3ecddc272cb437ec2773b626114fcc38a22e3c31066c6dee"' :
                                        'id="xs-injectables-links-module-AuthModule-67c9026fc1a94e0305ee1c0341daa35e2180f3dfd314cdb9bbd01a9e9b7785691411f3c7eea482ec3ecddc272cb437ec2773b626114fcc38a22e3c31066c6dee"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-07657292df222430cc5705403213011da8113a04869e1d13bb707d5e97e67041435c4a4308582c0e19a53288629e057408457ea6c9b2a7c51673d05462982e0f"' : 'data-target="#xs-components-links-module-SharedModule-07657292df222430cc5705403213011da8113a04869e1d13bb707d5e97e67041435c4a4308582c0e19a53288629e057408457ea6c9b2a7c51673d05462982e0f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-07657292df222430cc5705403213011da8113a04869e1d13bb707d5e97e67041435c4a4308582c0e19a53288629e057408457ea6c9b2a7c51673d05462982e0f"' :
                                            'id="xs-components-links-module-SharedModule-07657292df222430cc5705403213011da8113a04869e1d13bb707d5e97e67041435c4a4308582c0e19a53288629e057408457ea6c9b2a7c51673d05462982e0f"' }>
                                            <li class="link">
                                                <a href="components/AdminLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuthLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BlogLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlogLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LeftSidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LeftSidebarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserModule-ad30f93292202497d892b5f65c1f4dbfd92afd0aee6a5fc93d0c4d3e7b67aa0a25242a6f96b3c335af699a33fa861d53562ad43e88b07fb11b80b08392e2adf5"' : 'data-target="#xs-components-links-module-UserModule-ad30f93292202497d892b5f65c1f4dbfd92afd0aee6a5fc93d0c4d3e7b67aa0a25242a6f96b3c335af699a33fa861d53562ad43e88b07fb11b80b08392e2adf5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-ad30f93292202497d892b5f65c1f4dbfd92afd0aee6a5fc93d0c4d3e7b67aa0a25242a6f96b3c335af699a33fa861d53562ad43e88b07fb11b80b08392e2adf5"' :
                                            'id="xs-components-links-module-UserModule-ad30f93292202497d892b5f65c1f4dbfd92afd0aee6a5fc93d0c4d3e7b67aa0a25242a6f96b3c335af699a33fa861d53562ad43e88b07fb11b80b08392e2adf5"' }>
                                            <li class="link">
                                                <a href="components/CommentsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommentsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateCommentsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateCommentsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreatePostComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreatePostComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HelloComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HelloComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PostsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TestComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TestComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateCommentsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateCommentsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdatePostsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdatePostsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-ad30f93292202497d892b5f65c1f4dbfd92afd0aee6a5fc93d0c4d3e7b67aa0a25242a6f96b3c335af699a33fa861d53562ad43e88b07fb11b80b08392e2adf5"' : 'data-target="#xs-injectables-links-module-UserModule-ad30f93292202497d892b5f65c1f4dbfd92afd0aee6a5fc93d0c4d3e7b67aa0a25242a6f96b3c335af699a33fa861d53562ad43e88b07fb11b80b08392e2adf5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-ad30f93292202497d892b5f65c1f4dbfd92afd0aee6a5fc93d0c4d3e7b67aa0a25242a6f96b3c335af699a33fa861d53562ad43e88b07fb11b80b08392e2adf5"' :
                                        'id="xs-injectables-links-module-UserModule-ad30f93292202497d892b5f65c1f4dbfd92afd0aee6a5fc93d0c4d3e7b67aa0a25242a6f96b3c335af699a33fa861d53562ad43e88b07fb11b80b08392e2adf5"' }>
                                        <li class="link">
                                            <a href="injectables/BotService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BotService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TestService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TestService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserRoutingModule.html" data-type="entity-link" >UserRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/ProfileComponent.html" data-type="entity-link" >ProfileComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/FaqService.html" data-type="entity-link" >FaqService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AfterLoginGuard.html" data-type="entity-link" >AfterLoginGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});