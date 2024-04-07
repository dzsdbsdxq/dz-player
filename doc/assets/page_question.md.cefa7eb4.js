import{_ as s,c as a,o as n,V as e}from"./chunks/framework.e20c294a.js";const h=JSON.parse('{"title":"常见问题","description":"","frontmatter":{},"headers":[],"relativePath":"page/question.md","filePath":"page/question.md"}'),l={name:"page/question.md"},o=e(`<h1 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h1><h2 id="为什么播放器不能实现自动播放" tabindex="-1">为什么播放器不能实现自动播放？ <a class="header-anchor" href="#为什么播放器不能实现自动播放" aria-label="Permalink to &quot;为什么播放器不能实现自动播放？&quot;">​</a></h2><p>由于浏览器的策略问题，很多时候就算我们设置了<code>autoplay</code>属性也无法实现自动播放的。以下提供 2 种思路实现自动播放，这 2 种思路的前提是设置了<code>autoplay</code>属性</p><ul><li><p>用户与网页进行交互。浏览器是不允许在用户没有操作的的时候自动播放视频的，所以你需要想办法让用户跟网页产生交互，然后才去初始化播放器。但是这种做法基本用不上。。。</p></li><li><p>静音播放。浏览器是不允许有声音的视频进行自动播放的，但是允许静音的视频进行播放的。所以你可以将视频的音量设置为 0，然后在进行自动播放。<code>DzPlayer</code>可以通过设置对应的参数实现这种静音自动播放的功能</p></li></ul><div class="warning custom-block"><p class="custom-block-title">误区</p><p>设置了<code>autoplay</code>属性，然后通过监听<code>canplaythrough</code>事件，手动去播放，这样子是不能实现自动播放的</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#E5C07B;">player</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">on</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;canplaythrough&quot;</span><span style="color:#ABB2BF;">, () </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">player</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">play</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>静音自动播放，然后监听<code>canplaythrough</code>事件，恢复视频的音量，这样子也是不能实现自动播放的</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#E5C07B;">player</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">on</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;canplaythrough&quot;</span><span style="color:#ABB2BF;">, () </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">player</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">volume</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div>`,5),p=[o];function t(c,r,i,B,d,u){return n(),a("div",null,p)}const _=s(l,[["render",t]]);export{h as __pageData,_ as default};