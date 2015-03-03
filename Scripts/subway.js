


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Subwayjs/subway.js at master · CamDavidsonPilon/Subwayjs · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="github-fe123-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 2.0.0p247-github4 (2013-06-27) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="xhr-socket" href="/_sockets" />
    
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="038a3880-ff29-4b18-9571-586a93d74b9f" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="v7BECNnpXF6eUo8rr40KDrNQwfiRXTVOfaI8zE4S6G0=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-d39572eb116479b3be363f656e2b0f0b9ff0c046.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-d75c750a6b14571dc070b6570d9224acd7b6795e.css" media="all" rel="stylesheet" type="text/css" />
    

    

      <script src="https://github.global.ssl.fastly.net/assets/frameworks-f86a2975a82dceee28e5afe598d1ebbfd7109d79.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-be76400731d26146fc825df9f879385b669bd2fc.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="73110e82157960a96a72a54f11351722">

        <link data-pjax-transient rel='permalink' href='/CamDavidsonPilon/Subwayjs/blob/87aec4e3c354f8086236f7a01a202092295c745b/subway.js'>
  <meta property="og:title" content="Subwayjs"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/CamDavidsonPilon/Subwayjs"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="Subwayjs - make an interactive subway map in javascript."/>

  <meta name="description" content="Subwayjs - make an interactive subway map in javascript." />

  <meta content="884032" name="octolytics-dimension-user_id" /><meta content="CamDavidsonPilon" name="octolytics-dimension-user_login" /><meta content="4997871" name="octolytics-dimension-repository_id" /><meta content="CamDavidsonPilon/Subwayjs" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="4997871" name="octolytics-dimension-repository_network_root_id" /><meta content="CamDavidsonPilon/Subwayjs" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/CamDavidsonPilon/Subwayjs/commits/master.atom" rel="alternate" title="Recent Commits to Subwayjs:master" type="application/atom+xml" />

  </head>


  <body class="logged_out  env-production macintosh vis-public page-blob">
    <div class="wrapper">
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/signup">Sign up</a>
      <a class="button" href="/login?return_to=%2FCamDavidsonPilon%2FSubwayjs%2Fblob%2Fmaster%2Fsubway.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">

      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="CamDavidsonPilon/Subwayjs"
      data-branch="master"
      data-sha="8a0a4d01e3d3e2d797ea8780116ef341c6a5adf0"
  >

    <input type="hidden" name="nwo" value="CamDavidsonPilon/Subwayjs" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>


      


          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


  <li>
  <a href="/login?return_to=%2FCamDavidsonPilon%2FSubwayjs"
  class="minibutton with-count js-toggler-target star-button entice tooltipped upwards"
  title="You must be signed in to use this feature" rel="nofollow">
  <span class="octicon octicon-star"></span>Star
</a>
<a class="social-count js-social-count" href="/CamDavidsonPilon/Subwayjs/stargazers">
  11
</a>

  </li>

    <li>
      <a href="/login?return_to=%2FCamDavidsonPilon%2FSubwayjs"
        class="minibutton with-count js-toggler-target fork-button entice tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/CamDavidsonPilon/Subwayjs/network" class="social-count">
        2
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/CamDavidsonPilon" class="url fn" itemprop="url" rel="author"><span itemprop="title">CamDavidsonPilon</span></a></span
          ><span class="repohead-name-divider">/</span><strong
          ><a href="/CamDavidsonPilon/Subwayjs" class="js-current-repository js-repo-home-link">Subwayjs</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container ">

        <div class="repository-sidebar">
            

<div class="repo-nav repo-nav-full js-repository-container-pjax js-octicon-loaders">
  <div class="repo-nav-contents">
    <ul class="repo-menu">
      <li class="tooltipped leftwards" title="Code">
        <a href="/CamDavidsonPilon/Subwayjs" aria-label="Code" class="js-selected-navigation-item selected" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /CamDavidsonPilon/Subwayjs">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/CamDavidsonPilon/Subwayjs/issues" aria-label="Issues" class="js-selected-navigation-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /CamDavidsonPilon/Subwayjs/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests"><a href="/CamDavidsonPilon/Subwayjs/pulls" aria-label="Pull Requests" class="js-selected-navigation-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /CamDavidsonPilon/Subwayjs/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="repo-menu-separator"></div>
    <ul class="repo-menu">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/CamDavidsonPilon/Subwayjs/pulse" aria-label="Pulse" class="js-selected-navigation-item " data-pjax="true" data-selected-links="pulse /CamDavidsonPilon/Subwayjs/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/CamDavidsonPilon/Subwayjs/graphs" aria-label="Graphs" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_graphs repo_contributors /CamDavidsonPilon/Subwayjs/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/CamDavidsonPilon/Subwayjs/network" aria-label="Network" class="js-selected-navigation-item js-disable-pjax" data-selected-links="repo_network /CamDavidsonPilon/Subwayjs/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

            <div class="only-with-full-nav">
              

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>

  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/CamDavidsonPilon/Subwayjs.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/CamDavidsonPilon/Subwayjs.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>

  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/CamDavidsonPilon/Subwayjs" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/CamDavidsonPilon/Subwayjs" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>



<p class="clone-options">You can clone with
    <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
    <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>,
  and <a href="https://help.github.com/articles/which-remote-url-should-i-use">other methods.</a>
</p>

  <a href="http://mac.github.com" class="minibutton sidebar-button">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/CamDavidsonPilon/Subwayjs/archive/master.zip"
                   class="minibutton sidebar-button"
                   title="Download this repository as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:6d6d39bf18617ad3006177efe704b03d -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:6d6d39bf18617ad3006177efe704b03d -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/CamDavidsonPilon/Subwayjs/find/master" data-pjax data-hotkey="t" style="display:none">Show File Finder</a>

<div class="file-navigation">
  


<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/CamDavidsonPilon/Subwayjs/blob/master/subway.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" data-skip-pjax="true" rel="nofollow" title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/CamDavidsonPilon/Subwayjs" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">Subwayjs</span></a></span></span><span class="separator"> / </span><strong class="final-path">subway.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="subway.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit commit-loader file-history-tease js-deferred-content" data-url="/CamDavidsonPilon/Subwayjs/contributors/master/subway.js">
    Fetching contributors…

    <div class="participation">
      <p class="loader-loading"><img alt="Octocat-spinner-32-eaf2f5" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" /></p>
      <p class="loader-error">Cannot retrieve contributors at this time</p>
    </div>
  </div>

<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>279 lines (213 sloc)</span>
        <span>9.824 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
              <a class="minibutton disabled js-entice" href=""
                 data-entice="You must be signed in to make or propose changes">Edit</a>
          <a href="/CamDavidsonPilon/Subwayjs/raw/master/subway.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/CamDavidsonPilon/Subwayjs/blame/master/subway.js" class="button minibutton ">Blame</a>
          <a href="/CamDavidsonPilon/Subwayjs/commits/master/subway.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
            <a class="minibutton danger empty-icon js-entice" href=""
               data-entice="You must be signed in and on a branch to make or propose changes">
            Delete
          </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>

            </td>
            <td class="blob-line-code">
                    <div class="highlight"><pre><div class='line' id='LC1'><br/></div><div class='line' id='LC2'><span class="c1">//subway.js</span></div><div class='line' id='LC3'><span class="c1">// Author: Cameron Davidson-Pilon</span></div><div class='line' id='LC4'><span class="c1">// Date: July, 2012</span></div><div class='line' id='LC5'><span class="c1">// License: MIT</span></div><div class='line' id='LC6'><br/></div><div class='line' id='LC7'><br/></div><div class='line' id='LC8'><span class="c1">// Dependencies: </span></div><div class='line' id='LC9'><span class="c1">//  Paper.js (http://paperjs.org/)</span></div><div class='line' id='LC10'><br/></div><div class='line' id='LC11'><br/></div><div class='line' id='LC12'><br/></div><div class='line' id='LC13'><br/></div><div class='line' id='LC14'><br/></div><div class='line' id='LC15'><span class="c1">// These change the subway node design. Try manipulating them to see what they do.</span></div><div class='line' id='LC16'><span class="c1">// Note: all measurments are in pixels.</span></div><div class='line' id='LC17'><br/></div><div class='line' id='LC18'><span class="kd">var</span> <span class="nx">NODE_SIZE</span> <span class="o">=</span> <span class="mi">16</span><span class="p">;</span> <span class="c1">//radius of the nodes</span></div><div class='line' id='LC19'><span class="kd">var</span> <span class="nx">INNER_NODE_SIZE</span> <span class="o">=</span> <span class="mi">7</span><span class="p">;</span> <span class="c1">//radius of the inner circle in the stations</span></div><div class='line' id='LC20'><span class="kd">var</span> <span class="nx">CUR_NODE_SIZE</span> <span class="o">=</span> <span class="mi">9</span><span class="p">;</span> <span class="c1">// radious of the inner cicle, if is is currently selected.</span></div><div class='line' id='LC21'><span class="kd">var</span> <span class="nx">LINE_WIDTH</span> <span class="o">=</span> <span class="mi">23</span><span class="p">;</span> <span class="c1">//width of the inter-station lines.</span></div><div class='line' id='LC22'><br/></div><div class='line' id='LC23'><span class="c1">// fonts</span></div><div class='line' id='LC24'><span class="kd">var</span> <span class="nx">FONT_SIZE</span> <span class="o">=</span> <span class="mi">16</span><span class="p">;</span></div><div class='line' id='LC25'><span class="kd">var</span> <span class="nx">TEXT_FONT</span> <span class="o">=</span> <span class="s1">&#39;Arial&#39;</span><span class="p">;</span></div><div class='line' id='LC26'><span class="kd">var</span> <span class="nx">FONT_COLOR</span> <span class="o">=</span> <span class="s1">&#39;black&#39;</span><span class="p">;</span></div><div class='line' id='LC27'><br/></div><div class='line' id='LC28'><span class="kd">var</span> <span class="nx">CHARACTER_STYLE</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC29'>		<span class="nx">fillColor</span><span class="o">:</span> <span class="nx">FONT_COLOR</span><span class="p">,</span></div><div class='line' id='LC30'>		<span class="nx">fontSize</span><span class="o">:</span> <span class="nx">FONT_SIZE</span><span class="p">,</span></div><div class='line' id='LC31'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">font</span><span class="o">:</span> <span class="nx">TEXT_FONT</span><span class="p">,</span></div><div class='line' id='LC32'>		<span class="p">};</span></div><div class='line' id='LC33'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC34'><span class="kd">var</span> <span class="nx">nodes</span> <span class="o">=</span> <span class="p">[];</span> <span class="c1">// after initilization, this variable will contain all stations. Needed for clicking stations with mouse. </span></div><div class='line' id='LC35'><span class="kd">var</span> <span class="nx">shiftDown</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="c1">//This is used in controlling the location with the keys. It is a boolean representing whether the </span></div><div class='line' id='LC36'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// shift key is currently pressed down. </span></div><div class='line' id='LC37'><br/></div><div class='line' id='LC38'><span class="kd">function</span> <span class="nx">Line</span><span class="p">(</span> <span class="nx">color</span><span class="p">,</span> <span class="nx">name</span> <span class="p">){</span></div><div class='line' id='LC39'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// the Line object creates a subway line. </span></div><div class='line' id='LC40'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//   color: must be a paper.js RgbColor or a keyword color, eg: &#39;black&#39;, &#39;green&#39;.</span></div><div class='line' id='LC41'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//   name: the unique name of the line. </span></div><div class='line' id='LC42'><br/></div><div class='line' id='LC43'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">[</span><span class="s1">&#39;color&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">color</span><span class="p">;</span></div><div class='line' id='LC44'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">[</span><span class="s1">&#39;path&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Path</span><span class="p">();</span></div><div class='line' id='LC45'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">[</span><span class="s1">&#39;path&#39;</span><span class="p">].</span><span class="nx">strokeWidth</span> <span class="o">=</span> <span class="nx">LINE_WIDTH</span><span class="p">;</span></div><div class='line' id='LC46'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">[</span><span class="s1">&#39;path&#39;</span><span class="p">].</span><span class="nx">strokeColor</span> <span class="o">=</span> <span class="k">this</span><span class="p">[</span><span class="s1">&#39;color&#39;</span><span class="p">];</span></div><div class='line' id='LC47'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">[</span><span class="s1">&#39;name&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">name</span><span class="p">;</span></div><div class='line' id='LC48'><br/></div><div class='line' id='LC49'><span class="p">}</span></div><div class='line' id='LC50'><br/></div><div class='line' id='LC51'><br/></div><div class='line' id='LC52'><br/></div><div class='line' id='LC53'><span class="kd">function</span> <span class="nx">SingleNode</span><span class="p">(</span> <span class="nx">line</span><span class="p">,</span> <span class="nx">position</span><span class="p">,</span> <span class="nx">neighbours</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span> <span class="nx">url</span><span class="p">,</span> <span class="nx">name_offset</span><span class="p">,</span> <span class="nx">name_angle</span><span class="p">){</span></div><div class='line' id='LC54'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// the Node object is a non transitionay subway stop</span></div><div class='line' id='LC55'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//      line: the line the node lies on.</span></div><div class='line' id='LC56'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//      position: the coordinates on the canvas as Point class object.</span></div><div class='line' id='LC57'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//      neighbours: the neighbours of the node.  It </span></div><div class='line' id='LC58'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//          must be the syntax {&#39;E&#39;:Neighbour1, &#39;W&#39;:Neighbour2, etc.}. Note: this way we can also do things like:</span></div><div class='line' id='LC59'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//          {&#39;W&#39;: Neighbour1, &#39;S&#39;: Neighbour1, &#39;E&#39;: Neighbour2}. Note all the directions need to be defined.</span></div><div class='line' id='LC60'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//      name: the station name to be displayed.</span></div><div class='line' id='LC61'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//      url: the url to go to if the SpaceBar is pressed. Leave as &#39;&#39; if not wanted.</span></div><div class='line' id='LC62'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//      name_offset: the amount to move the display named away from the center of the station. It must be a paper.js Point</span></div><div class='line' id='LC63'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//                   object. ie. new Point( 10, 10) will position the top left corner of the text 10 pixels right and </span></div><div class='line' id='LC64'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//                  10 pixels below the center of the station.</span></div><div class='line' id='LC65'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//      name_angle: the angle the name to be at. Enter it in counterclockwise radians.</span></div><div class='line' id='LC66'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC67'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">[</span><span class="s1">&#39;line&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">line</span><span class="p">;</span></div><div class='line' id='LC68'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">[</span><span class="s1">&#39;position&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">position</span><span class="p">;</span></div><div class='line' id='LC69'>	<span class="k">this</span><span class="p">[</span><span class="s1">&#39;name&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">name</span><span class="p">;</span></div><div class='line' id='LC70'>	<span class="k">this</span><span class="p">[</span><span class="s1">&#39;url&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">url</span><span class="p">;</span></div><div class='line' id='LC71'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">[</span><span class="s1">&#39;name_angle&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">name_angle</span><span class="p">;</span></div><div class='line' id='LC72'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">[</span><span class="s1">&#39;neighbours&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">neighbours</span><span class="p">;</span></div><div class='line' id='LC73'>	<span class="nx">nodes</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="k">this</span><span class="p">)</span></div><div class='line' id='LC74'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC75'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//Methods</span></div><div class='line' id='LC76'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">onkeydownNode</span> <span class="o">=</span> <span class="nx">onkeydownNode</span><span class="p">;</span> <span class="c1">//this controls the movement if keys are pressed.</span></div><div class='line' id='LC77'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">fillNode</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC78'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//this method fires when the user enters the node.</span></div><div class='line' id='LC79'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">ic</span><span class="p">.</span><span class="nx">fillColor</span> <span class="o">=</span> <span class="s1">&#39;black&#39;</span><span class="p">;</span></div><div class='line' id='LC80'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span> </div><div class='line' id='LC81'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">emptyNode</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC82'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//this method fires when the user enters the node.</span></div><div class='line' id='LC83'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">ic</span><span class="p">.</span><span class="nx">fillColor</span> <span class="o">=</span> <span class="s1">&#39;white&#39;</span><span class="p">;</span></div><div class='line' id='LC84'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC85'><br/></div><div class='line' id='LC86'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC87'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// generate the visual shapes.</span></div><div class='line' id='LC88'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">c</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Path</span><span class="p">.</span><span class="nx">Circle</span><span class="p">(</span> <span class="k">this</span><span class="p">[</span><span class="s1">&#39;position&#39;</span><span class="p">],</span> <span class="nx">NODE_SIZE</span><span class="p">);</span></div><div class='line' id='LC89'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">c</span><span class="p">.</span><span class="nx">fillColor</span> <span class="o">=</span> <span class="k">this</span><span class="p">[</span><span class="s1">&#39;line&#39;</span><span class="p">][</span><span class="s1">&#39;color&#39;</span><span class="p">];</span></div><div class='line' id='LC90'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">ic</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Path</span><span class="p">.</span><span class="nx">Circle</span><span class="p">(</span> <span class="k">this</span><span class="p">[</span><span class="s1">&#39;position&#39;</span><span class="p">],</span> <span class="nx">INNER_NODE_SIZE</span><span class="o">+</span><span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC91'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ic</span><span class="p">.</span><span class="nx">fillColor</span> <span class="o">=</span> <span class="s1">&#39;black&#39;</span><span class="p">;</span></div><div class='line' id='LC92'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC93'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">ic</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Path</span><span class="p">.</span><span class="nx">Circle</span><span class="p">(</span> <span class="k">this</span><span class="p">[</span><span class="s1">&#39;position&#39;</span><span class="p">],</span> <span class="nx">INNER_NODE_SIZE</span><span class="p">);</span></div><div class='line' id='LC94'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">ic</span><span class="p">.</span><span class="nx">fillColor</span> <span class="o">=</span> <span class="s1">&#39;white&#39;</span><span class="p">;</span></div><div class='line' id='LC95'><br/></div><div class='line' id='LC96'>	<span class="k">this</span><span class="p">[</span><span class="s1">&#39;text&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">PointText</span><span class="p">(</span> <span class="k">this</span><span class="p">[</span><span class="s1">&#39;position&#39;</span><span class="p">]</span> <span class="o">+</span> <span class="nx">name_offset</span> <span class="p">);</span></div><div class='line' id='LC97'>	<span class="k">this</span><span class="p">[</span><span class="s1">&#39;text&#39;</span><span class="p">].</span><span class="nx">content</span> <span class="o">=</span> <span class="k">this</span><span class="p">[</span><span class="s1">&#39;name&#39;</span><span class="p">];</span></div><div class='line' id='LC98'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">[</span><span class="s1">&#39;text&#39;</span><span class="p">].</span><span class="nx">characterStyle</span> <span class="o">=</span> <span class="nx">CHARACTER_STYLE</span><span class="p">;</span></div><div class='line' id='LC99'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">[</span><span class="s1">&#39;text&#39;</span><span class="p">].</span><span class="nx">rotate</span><span class="p">(</span> <span class="o">-</span><span class="k">this</span><span class="p">[</span><span class="s1">&#39;name_angle&#39;</span><span class="p">],</span> <span class="k">this</span><span class="p">[</span><span class="s1">&#39;position&#39;</span><span class="p">]</span> <span class="p">);</span></div><div class='line' id='LC100'><br/></div><div class='line' id='LC101'><br/></div><div class='line' id='LC102'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// add it to the line.</span></div><div class='line' id='LC103'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">[</span><span class="s1">&#39;line&#39;</span><span class="p">][</span><span class="s1">&#39;path&#39;</span><span class="p">].</span><span class="nx">add</span><span class="p">(</span> <span class="k">this</span><span class="p">[</span><span class="s1">&#39;position&#39;</span><span class="p">]</span> <span class="p">);</span></div><div class='line' id='LC104'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC105'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC106'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC107'><span class="kd">function</span> <span class="nx">TransitionNode</span><span class="p">(</span> <span class="nx">line</span><span class="p">,</span> <span class="nx">line2</span><span class="p">,</span> <span class="nx">angle</span><span class="p">,</span> <span class="nx">position</span><span class="p">,</span> <span class="nx">neighbours</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span> <span class="nx">url</span><span class="p">,</span><span class="nx">name_offset</span><span class="p">,</span> <span class="nx">name_angle</span><span class="p">){</span></div><div class='line' id='LC108'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// the Node object is a non transitionay subway stop</span></div><div class='line' id='LC109'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//      line: the primary line the node lies on.</span></div><div class='line' id='LC110'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//      line2: the secondary line the node lies on.</span></div><div class='line' id='LC111'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//      angle: the angle of the above and underneath node. Equal to the angle of the two lines.</span></div><div class='line' id='LC112'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//      position: the coordinates on the canvas as Point class object.</span></div><div class='line' id='LC113'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//      neighbours: the neighbours of the node.  It </span></div><div class='line' id='LC114'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//          must be the syntax {&#39;E&#39;:Neighbour1, &#39;W&#39;:Neighbour2, etc.}. Note: this way we can also do things like:</span></div><div class='line' id='LC115'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//          {&#39;W&#39;: Neighbour1, &#39;S&#39;: Neighbour1, &#39;E&#39;: Neighbour2}. Note all the directions need to be defined.</span></div><div class='line' id='LC116'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//      name: the station name to be displayed.</span></div><div class='line' id='LC117'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//      url: the url to go to if the SpaceBar is pressed. Leave as &#39;&#39; if not wanted.</span></div><div class='line' id='LC118'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//      name_offset: the amount to move the display named away from the center of the station. It must be a paper.js Point</span></div><div class='line' id='LC119'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//                   object. ie. new Point( 10, 10) will position the top left corner of the text 10 pixels right and </span></div><div class='line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//                  10 pixels below the center of the station.</span></div><div class='line' id='LC121'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//      name_angle: the angle the name to be at. Enter it in counterclockwise radians.</span></div><div class='line' id='LC122'><br/></div><div class='line' id='LC123'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC124'>	<span class="kd">var</span> <span class="nx">STROKE_WIDTH</span> <span class="o">=</span> <span class="mi">2</span><span class="p">;</span> <span class="c1">//this two control the offset and appearance of the &#39;underneath node&#39;</span></div><div class='line' id='LC125'>	<span class="kd">var</span> <span class="nx">CIRCLE_DIST</span> <span class="o">=</span> <span class="mi">16</span><span class="p">;</span></div><div class='line' id='LC126'><br/></div><div class='line' id='LC127'><br/></div><div class='line' id='LC128'>	<span class="c1">//This Node is the class for line transition stations.</span></div><div class='line' id='LC129'>	<span class="k">this</span><span class="p">[</span><span class="s1">&#39;line&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">line</span><span class="p">;</span></div><div class='line' id='LC130'>	<span class="k">this</span><span class="p">[</span><span class="s1">&#39;line2&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">line2</span><span class="p">;</span></div><div class='line' id='LC131'>	<span class="k">this</span><span class="p">[</span><span class="s1">&#39;position&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">position</span><span class="p">;</span> <span class="c1">//This is the position of either of the circles. The angle determines the position of the other one.</span></div><div class='line' id='LC132'>	<span class="k">this</span><span class="p">[</span><span class="s1">&#39;neighbours&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">neighbours</span><span class="p">;</span></div><div class='line' id='LC133'>	<span class="k">this</span><span class="p">[</span><span class="s1">&#39;angle&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">angle</span><span class="p">;</span> <span class="c1">//This is the angle between the two circles.</span></div><div class='line' id='LC134'>	<span class="k">this</span><span class="p">[</span><span class="s1">&#39;positionAlt&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="k">this</span><span class="p">[</span><span class="s1">&#39;position&#39;</span><span class="p">]</span> <span class="o">+</span> <span class="k">new</span> <span class="nx">Point</span><span class="p">(</span> <span class="nx">CIRCLE_DIST</span><span class="o">*</span><span class="nb">Math</span><span class="p">.</span><span class="nx">cos</span><span class="p">(</span> <span class="nx">angle</span><span class="p">),</span> <span class="nx">CIRCLE_DIST</span><span class="o">*</span><span class="nb">Math</span><span class="p">.</span><span class="nx">sin</span><span class="p">(</span> <span class="nx">angle</span><span class="p">)</span>  <span class="p">);</span></div><div class='line' id='LC135'>	<span class="k">this</span><span class="p">[</span><span class="s1">&#39;name&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">name</span><span class="p">;</span></div><div class='line' id='LC136'>	<span class="k">this</span><span class="p">[</span><span class="s1">&#39;url&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">url</span><span class="p">;</span></div><div class='line' id='LC137'>	<span class="nx">nodes</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC138'><br/></div><div class='line' id='LC139'>	<span class="c1">//Methods;</span></div><div class='line' id='LC140'>	<span class="k">this</span><span class="p">.</span><span class="nx">onkeydownNode</span> <span class="o">=</span> <span class="nx">onkeydownNode</span><span class="p">;</span></div><div class='line' id='LC141'>	<span class="k">this</span><span class="p">.</span><span class="nx">emptyNode</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC142'>			<span class="k">this</span><span class="p">.</span><span class="nx">innerc</span><span class="p">.</span><span class="nx">fillColor</span> <span class="o">=</span> <span class="k">this</span><span class="p">[</span><span class="s1">&#39;path&#39;</span><span class="p">][</span><span class="s1">&#39;color&#39;</span><span class="p">];</span></div><div class='line' id='LC143'>	<span class="p">}</span></div><div class='line' id='LC144'>	<span class="k">this</span><span class="p">.</span><span class="nx">fillNode</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC145'>			<span class="k">this</span><span class="p">.</span><span class="nx">innerc</span><span class="p">.</span><span class="nx">fillColor</span> <span class="o">=</span> <span class="s1">&#39;black&#39;</span><span class="p">;</span></div><div class='line' id='LC146'>	<span class="p">}</span> </div><div class='line' id='LC147'><br/></div><div class='line' id='LC148'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Title to display.</span></div><div class='line' id='LC149'>	<span class="k">this</span><span class="p">[</span><span class="s1">&#39;text&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">PointText</span><span class="p">(</span> <span class="k">this</span><span class="p">[</span><span class="s1">&#39;position&#39;</span><span class="p">]</span> <span class="o">+</span> <span class="nx">name_offset</span> <span class="p">);</span></div><div class='line' id='LC150'>	<span class="k">this</span><span class="p">[</span><span class="s1">&#39;text&#39;</span><span class="p">].</span><span class="nx">content</span> <span class="o">=</span> <span class="k">this</span><span class="p">[</span><span class="s1">&#39;name&#39;</span><span class="p">];</span></div><div class='line' id='LC151'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">[</span><span class="s1">&#39;text&#39;</span><span class="p">].</span><span class="nx">characterStyle</span> <span class="o">=</span> <span class="nx">CHARACTER_STYLE</span><span class="p">;</span></div><div class='line' id='LC152'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">[</span><span class="s1">&#39;text&#39;</span><span class="p">].</span><span class="nx">rotate</span><span class="p">(</span> <span class="o">-</span><span class="nx">name_angle</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">position</span><span class="p">);</span></div><div class='line' id='LC153'><br/></div><div class='line' id='LC154'>	<span class="c1">//generate visual shapes</span></div><div class='line' id='LC155'>	<span class="kd">var</span> <span class="nx">c2</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Path</span><span class="p">.</span><span class="nx">Circle</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">positionAlt</span> <span class="p">,</span> <span class="nx">NODE_SIZE</span><span class="p">);</span></div><div class='line' id='LC156'>	<span class="nx">c2</span><span class="p">.</span><span class="nx">strokeWidth</span> <span class="o">=</span> <span class="nx">STROKE_WIDTH</span><span class="p">;</span></div><div class='line' id='LC157'>	<span class="nx">c2</span><span class="p">.</span><span class="nx">strokeColor</span> <span class="o">=</span> <span class="s1">&#39;black&#39;</span><span class="p">;</span></div><div class='line' id='LC158'>	<span class="nx">c2</span><span class="p">.</span><span class="nx">fillColor</span> <span class="o">=</span> <span class="s1">&#39;white&#39;</span><span class="p">;</span></div><div class='line' id='LC159'>	<span class="kd">var</span> <span class="nx">c2</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Path</span><span class="p">.</span><span class="nx">Circle</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">positionAlt</span><span class="p">,</span> <span class="nx">CUR_NODE_SIZE</span><span class="o">+</span><span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC160'>	<span class="nx">c2</span><span class="p">.</span><span class="nx">fillColor</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">line2</span><span class="p">.</span><span class="nx">color</span><span class="p">;</span></div><div class='line' id='LC161'><br/></div><div class='line' id='LC162'>	<span class="kd">var</span> <span class="nx">c1</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Path</span><span class="p">.</span><span class="nx">Circle</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">position</span><span class="p">,</span> <span class="nx">NODE_SIZE</span><span class="p">);</span></div><div class='line' id='LC163'>	<span class="nx">c1</span><span class="p">.</span><span class="nx">strokeWidth</span> <span class="o">=</span> <span class="nx">STROKE_WIDTH</span><span class="p">;</span></div><div class='line' id='LC164'>	<span class="nx">c1</span><span class="p">.</span><span class="nx">fillColor</span> <span class="o">=</span> <span class="s1">&#39;white&#39;</span><span class="p">;</span></div><div class='line' id='LC165'>	<span class="nx">c1</span><span class="p">.</span><span class="nx">strokeColor</span> <span class="o">=</span> <span class="s1">&#39;black&#39;</span><span class="p">;</span></div><div class='line' id='LC166'>	<span class="k">this</span><span class="p">.</span><span class="nx">innerc</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Path</span><span class="p">.</span><span class="nx">Circle</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">position</span><span class="p">,</span> <span class="nx">CUR_NODE_SIZE</span><span class="p">);</span></div><div class='line' id='LC167'>	<span class="k">this</span><span class="p">.</span><span class="nx">innerc</span><span class="p">.</span><span class="nx">fillColor</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">line</span><span class="p">.</span><span class="nx">color</span><span class="p">;</span></div><div class='line' id='LC168'><br/></div><div class='line' id='LC169'><br/></div><div class='line' id='LC170'>	<span class="c1">//add it the the lines.</span></div><div class='line' id='LC171'>	<span class="k">this</span><span class="p">[</span><span class="s1">&#39;line&#39;</span><span class="p">].</span><span class="nx">path</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span> <span class="k">this</span><span class="p">[</span><span class="s1">&#39;position&#39;</span><span class="p">]);</span></div><div class='line' id='LC172'>	<span class="k">this</span><span class="p">[</span><span class="s1">&#39;line2&#39;</span><span class="p">].</span><span class="nx">path</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span><span class="k">this</span><span class="p">[</span><span class="s1">&#39;positionAlt&#39;</span><span class="p">]);</span></div><div class='line' id='LC173'><br/></div><div class='line' id='LC174'><br/></div><div class='line' id='LC175'>	<span class="p">}</span></div><div class='line' id='LC176'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC177'><span class="kd">function</span> <span class="nx">LegendItem</span><span class="p">(</span> <span class="nx">start</span><span class="p">,</span> <span class="nx">end</span><span class="p">,</span> <span class="nx">subwayLine</span> <span class="p">){</span></div><div class='line' id='LC178'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC179'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">[</span><span class="s1">&#39;line&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Line</span><span class="p">(</span><span class="nx">subwayLine</span><span class="p">[</span><span class="s1">&#39;color&#39;</span><span class="p">],</span> <span class="nx">subwayLine</span><span class="p">[</span><span class="s1">&#39;name&#39;</span><span class="p">]);</span></div><div class='line' id='LC180'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">[</span><span class="s1">&#39;line&#39;</span><span class="p">][</span><span class="s1">&#39;path&#39;</span><span class="p">].</span><span class="nx">add</span><span class="p">(</span> <span class="nx">start</span><span class="p">,</span> <span class="nx">end</span><span class="p">)</span></div><div class='line' id='LC181'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">title</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">PointText</span><span class="p">(</span> <span class="nx">end</span> <span class="o">+</span> <span class="k">new</span> <span class="nx">Point</span><span class="p">(</span> <span class="mi">7</span><span class="p">,</span><span class="mi">5</span><span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC182'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">title</span><span class="p">.</span><span class="nx">content</span> <span class="o">=</span> <span class="nx">subwayLine</span><span class="p">.</span><span class="nx">name</span><span class="p">;</span></div><div class='line' id='LC183'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">title</span><span class="p">.</span><span class="nx">characterStyle</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC184'>		<span class="nx">fillColor</span><span class="o">:</span> <span class="s1">&#39;black&#39;</span><span class="p">,</span></div><div class='line' id='LC185'>		<span class="nx">fontSize</span><span class="o">:</span> <span class="mi">14</span><span class="p">,</span></div><div class='line' id='LC186'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">font</span><span class="o">:</span> <span class="nx">TEXT_FONT</span></div><div class='line' id='LC187'>		<span class="p">};</span> </div><div class='line' id='LC188'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC189'><span class="p">}</span></div><div class='line' id='LC190'>&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC191'>&nbsp;</div><div class='line' id='LC192'><span class="kd">function</span> <span class="nx">onKeyDown</span><span class="p">(</span><span class="nx">event</span><span class="p">){</span></div><div class='line' id='LC193'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">key</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">key</span><span class="p">;</span></div><div class='line' id='LC194'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">((</span><span class="nx">key</span><span class="o">==</span><span class="s2">&quot;up&quot;</span> <span class="o">&amp;&amp;</span> <span class="nx">shiftDown</span><span class="p">)</span> <span class="o">||</span> <span class="p">(</span><span class="nx">key</span><span class="o">==</span><span class="s2">&quot;w&quot;</span> <span class="p">)</span> <span class="p">){</span></div><div class='line' id='LC195'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">current_position</span><span class="p">.</span><span class="nx">onkeydownNode</span><span class="p">(</span><span class="s1">&#39;N&#39;</span><span class="p">);}</span></div><div class='line' id='LC196'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">((</span><span class="nx">key</span><span class="o">==</span><span class="s2">&quot;left&quot;</span> <span class="o">&amp;&amp;</span> <span class="nx">shiftDown</span><span class="p">)</span> <span class="o">||</span> <span class="p">(</span><span class="nx">key</span><span class="o">==</span><span class="s2">&quot;a&quot;</span> <span class="p">)</span> <span class="p">){</span></div><div class='line' id='LC197'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">current_position</span><span class="p">.</span><span class="nx">onkeydownNode</span><span class="p">(</span><span class="s1">&#39;W&#39;</span><span class="p">);}</span></div><div class='line' id='LC198'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">((</span><span class="nx">key</span><span class="o">==</span><span class="s2">&quot;right&quot;</span> <span class="o">&amp;&amp;</span> <span class="nx">shiftDown</span><span class="p">)</span> <span class="o">||</span> <span class="p">(</span><span class="nx">key</span><span class="o">==</span><span class="s2">&quot;d&quot;</span> <span class="p">)</span> <span class="p">){</span></div><div class='line' id='LC199'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">current_position</span><span class="p">.</span><span class="nx">onkeydownNode</span><span class="p">(</span><span class="s1">&#39;E&#39;</span><span class="p">);}</span></div><div class='line' id='LC200'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">((</span><span class="nx">key</span><span class="o">==</span><span class="s2">&quot;down&quot;</span> <span class="o">&amp;&amp;</span> <span class="nx">shiftDown</span><span class="p">)</span> <span class="o">||</span> <span class="p">(</span><span class="nx">key</span><span class="o">==</span><span class="s2">&quot;s&quot;</span> <span class="p">)</span> <span class="p">){</span></div><div class='line' id='LC201'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">current_position</span><span class="p">.</span><span class="nx">onkeydownNode</span><span class="p">(</span><span class="s1">&#39;S&#39;</span><span class="p">);}</span></div><div class='line' id='LC202'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//else if (key in oc([&#39;enter&#39;, &#39;space&#39;]) ){</span></div><div class='line' id='LC203'>	<span class="c1">//	window.location.href=current_position.url;}</span></div><div class='line' id='LC204'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">key</span><span class="o">==</span><span class="s2">&quot;shift&quot;</span><span class="p">){</span></div><div class='line' id='LC205'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">shiftDown</span><span class="o">=</span><span class="mi">1</span><span class="p">;}</span></div><div class='line' id='LC206'><span class="p">}</span></div><div class='line' id='LC207'><br/></div><div class='line' id='LC208'><span class="kd">function</span> <span class="nx">onKeyUp</span><span class="p">(</span><span class="nx">event</span><span class="p">){</span></div><div class='line' id='LC209'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">key</span> <span class="o">==</span> <span class="s2">&quot;shift&quot;</span><span class="p">){</span></div><div class='line' id='LC210'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">shiftDown</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC211'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC212'><span class="p">}</span></div><div class='line' id='LC213'><br/></div><div class='line' id='LC214'>&nbsp;</div><div class='line' id='LC215'><span class="kd">function</span> <span class="nx">onkeydownNode</span><span class="p">(</span> <span class="nx">keydown</span><span class="p">,</span> <span class="nx">node</span> <span class="p">){</span></div><div class='line' id='LC216'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span> <span class="nx">key</span> <span class="k">in</span> <span class="k">this</span><span class="p">[</span><span class="s1">&#39;neighbours&#39;</span><span class="p">]</span> <span class="p">){</span></div><div class='line' id='LC217'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">key</span> <span class="o">==</span> <span class="nx">keydown</span><span class="p">){</span></div><div class='line' id='LC218'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">current_position</span><span class="p">.</span><span class="nx">emptyNode</span><span class="p">();</span></div><div class='line' id='LC219'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">current_position</span> <span class="o">=</span> <span class="k">this</span><span class="p">[</span><span class="s1">&#39;neighbours&#39;</span><span class="p">][</span><span class="nx">key</span><span class="p">];</span></div><div class='line' id='LC220'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">current_position</span><span class="p">.</span><span class="nx">fillNode</span><span class="p">();</span></div><div class='line' id='LC221'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC222'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC223'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC224'><span class="p">}</span></div><div class='line' id='LC225'><br/></div><div class='line' id='LC226'><br/></div><div class='line' id='LC227'><br/></div><div class='line' id='LC228'><br/></div><div class='line' id='LC229'><br/></div><div class='line' id='LC230'><span class="kd">function</span> <span class="nx">DashLine</span><span class="p">(</span> <span class="nx">color</span><span class="p">,</span> <span class="nx">point1</span><span class="p">,</span> <span class="nx">point2</span><span class="p">){</span></div><div class='line' id='LC231'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// This creates a dashed subway line to represent either construction or leaving the webpage.</span></div><div class='line' id='LC232'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//    color: the color of the dashed line.</span></div><div class='line' id='LC233'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//    point1, point2: the beginning and end of the dashed line, as paper.js Point objects. </span></div><div class='line' id='LC234'>	<span class="k">this</span><span class="p">.</span><span class="nx">color</span> <span class="o">=</span> <span class="nx">color</span><span class="p">;</span></div><div class='line' id='LC235'>	<span class="k">this</span><span class="p">.</span><span class="nx">path</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Path</span><span class="p">();</span></div><div class='line' id='LC236'>	<span class="k">this</span><span class="p">.</span><span class="nx">path</span><span class="p">.</span><span class="nx">style</span> <span class="o">=</span> <span class="p">{</span> </div><div class='line' id='LC237'>		<span class="nx">strokeWidth</span><span class="o">:</span> <span class="nx">LINE_WIDTH</span><span class="p">,</span></div><div class='line' id='LC238'>		<span class="nx">strokeColor</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">color</span><span class="p">,</span></div><div class='line' id='LC239'>		<span class="p">};</span></div><div class='line' id='LC240'>	<span class="k">this</span><span class="p">.</span><span class="nx">path</span><span class="p">.</span><span class="nx">dashArray</span> <span class="o">=</span> <span class="p">[</span><span class="mi">7</span><span class="p">,</span><span class="mi">4</span><span class="p">];</span></div><div class='line' id='LC241'><br/></div><div class='line' id='LC242'>	<span class="k">this</span><span class="p">.</span><span class="nx">path</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span><span class="nx">point1</span><span class="p">,</span> <span class="nx">point2</span><span class="p">);</span></div><div class='line' id='LC243'>	<span class="p">}</span></div><div class='line' id='LC244'><br/></div><div class='line' id='LC245'><br/></div><div class='line' id='LC246'><br/></div><div class='line' id='LC247'><br/></div><div class='line' id='LC248'><br/></div><div class='line' id='LC249'><span class="kd">function</span> <span class="nx">onMouseDown</span><span class="p">(</span><span class="nx">event</span><span class="p">){</span></div><div class='line' id='LC250'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// This function fires whenever the mouse is pressed down. It iteratres through the stations and stops if it finds the </span></div><div class='line' id='LC251'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// cursor is over a station.</span></div><div class='line' id='LC252'>	<span class="kd">var</span> <span class="nx">N</span> <span class="o">=</span> <span class="nx">nodes</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC253'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">point</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">point</span><span class="p">;</span></div><div class='line' id='LC254'>	<span class="k">for</span><span class="p">(</span> <span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span> <span class="nx">i</span><span class="o">&lt;</span><span class="nx">N</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">){</span></div><div class='line' id='LC255'>		<span class="kd">var</span> <span class="nx">node_position</span> <span class="o">=</span> <span class="nx">nodes</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">position</span><span class="p">;</span></div><div class='line' id='LC256'>		<span class="k">if</span> <span class="p">(</span><span class="nx">Path</span><span class="p">.</span><span class="nx">Circle</span><span class="p">(</span> <span class="nx">node_position</span><span class="p">,</span> <span class="nx">NODE_SIZE</span> <span class="p">).</span><span class="nx">bounds</span><span class="p">.</span><span class="nx">contains</span><span class="p">(</span><span class="nx">point</span><span class="p">)</span> <span class="p">){</span></div><div class='line' id='LC257'>			<span class="nx">current_position</span><span class="p">.</span><span class="nx">emptyNode</span><span class="p">();</span></div><div class='line' id='LC258'>			<span class="nx">current_position</span> <span class="o">=</span> <span class="nx">nodes</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC259'>			<span class="nx">current_position</span><span class="p">.</span><span class="nx">fillNode</span><span class="p">();</span></div><div class='line' id='LC260'>			<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC261'>		<span class="p">}</span></div><div class='line' id='LC262'>	<span class="p">}</span></div><div class='line' id='LC263'><span class="p">}</span></div><div class='line' id='LC264'><br/></div><div class='line' id='LC265'><span class="kd">function</span> <span class="nx">onFrame</span><span class="p">(</span><span class="nx">event</span><span class="p">){</span></div><div class='line' id='LC266'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//This control the halo. You can choose to turn it off by removing this function, or you can create your own using </span></div><div class='line' id='LC267'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//this function too.</span></div><div class='line' id='LC268'>	<span class="nx">halo</span><span class="p">.</span><span class="nx">strokeColor</span> <span class="o">=</span> <span class="nx">current_position</span><span class="p">[</span><span class="s1">&#39;line&#39;</span><span class="p">][</span><span class="s1">&#39;color&#39;</span><span class="p">];</span></div><div class='line' id='LC269'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">halo</span><span class="p">.</span><span class="nx">scale</span><span class="p">(</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">pow</span><span class="p">(</span> <span class="mf">1.04</span><span class="p">,</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">sin</span><span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">count</span><span class="o">/</span><span class="mi">8</span> <span class="p">)));</span></div><div class='line' id='LC270'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">halo</span><span class="p">.</span><span class="nx">position</span> <span class="o">=</span> <span class="nx">current_position</span><span class="p">[</span><span class="s1">&#39;position&#39;</span><span class="p">];</span></div><div class='line' id='LC271'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC272'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//test how long it takes to compute sin(x) for different values of x.</span></div><div class='line' id='LC273'><br/></div><div class='line' id='LC274'><span class="p">}</span></div><div class='line' id='LC275'><br/></div><div class='line' id='LC276'><span class="kd">var</span> <span class="nx">shiftDown</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC277'><br/></div><div class='line' id='LC278'><br/></div></pre></div>
            </td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.14364s from github-fe123-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/CamDavidsonPilon/Subwayjs/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

    
  </body>
</html>

