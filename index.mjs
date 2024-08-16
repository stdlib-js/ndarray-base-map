// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-iteration-order@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-minmax-view-buffer-index@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ndarraylike2object@v0.2.2-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-unary-loop-interchange-order@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-unary-tiling-block-size@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-take-indexed@v0.2.2-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-reverse@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-unary-loop-interchange-order@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-unary-tiling-block-size@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-take-indexed@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-reverse@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zero-to@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-vind2bind@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ind2sub@esm/index.mjs";var y="throw";var v="throw";var j=[function(r,o,s,f){o.data[o.offset]=s.call(f,r.data[r.offset],[],r.ref)},function(r,o,s,f){var e,t,a,d,i,c,n,l;for(i=r.shape[0],a=r.strides[0],d=o.strides[0],c=r.offset,n=o.offset,e=r.data,t=o.data,l=0;l<i;l++)t[n]=s.call(f,e[c],[l],r.ref),c+=a,n+=d},function(r,o,s,f){var e,d,i,c,n,h,p,m,y,v,j,u,x,g,b,w;for(m=r.shape,j=r.strides,u=o.strides,p=l(m.length),"row-major"===r.order?(y=m[1],v=m[0],i=j[1],c=j[0]-y*j[1],n=u[1],h=u[0]-y*u[1]):(y=m[0],v=m[1],i=j[0],c=j[1]-y*j[0],n=u[0],h=u[1]-y*j[0],p=a(p)),x=r.offset,g=o.offset,e=r.data,d=o.data,w=0;w<v;w++){for(b=0;b<y;b++)d[g]=s.call(f,e[x],t([w,b],p),r.ref),x+=i,g+=n;x+=c,g+=h}},function(r,o,s,f){var e,a,d,i,c,h,p,m,y,v,j,u,x,g,b,w,P,k,z,A;for(v=r.shape,g=r.strides,b=o.strides,y=l(v.length),"row-major"===r.order?(j=v[2],u=v[1],x=v[0],d=g[2],i=g[1]-j*g[2],c=g[0]-u*g[1],h=b[2],p=b[1]-j*b[2],m=b[0]-u*b[1]):(j=v[0],u=v[1],x=v[2],d=g[0],i=g[1]-j*g[0],c=g[2]-u*g[1],h=b[0],p=b[1]-j*b[0],m=b[2]-u*b[1],y=n(y)),w=r.offset,P=o.offset,e=r.data,a=o.data,A=0;A<x;A++){for(z=0;z<u;z++){for(k=0;k<j;k++)a[P]=s.call(f,e[w],t([A,z,k],y),r.ref),w+=d,P+=h;w+=i,P+=p}w+=c,P+=m}},function(r,o,s,f){var e,t,d,i,n,h,p,m,y,v,j,u,x,g,b,w,P,k,z,A,E,q,B,C;for(u=r.shape,P=r.strides,k=o.strides,j=l(u.length),"row-major"===r.order?(x=u[3],g=u[2],b=u[1],w=u[0],d=P[3],i=P[2]-x*P[3],n=P[1]-g*P[2],h=P[0]-b*P[1],p=k[3],m=k[2]-x*k[3],y=k[1]-g*k[2],v=k[0]-b*k[1]):(x=u[0],g=u[1],b=u[2],w=u[3],d=P[0],i=P[1]-x*P[0],n=P[2]-g*P[1],h=P[3]-b*P[2],p=k[0],m=k[1]-x*k[0],y=k[2]-g*k[1],v=k[3]-b*k[2],j=a(j)),z=r.offset,A=o.offset,e=r.data,t=o.data,C=0;C<w;C++){for(B=0;B<b;B++){for(q=0;q<g;q++){for(E=0;E<x;E++)t[A]=s.call(f,e[z],c([C,B,q,E],j),r.ref),z+=d,A+=p;z+=i,A+=m}z+=n,A+=y}z+=h,A+=v}},function(r,o,s,f){var e,t,a,d,i,h,p,m,y,v,j,u,x,g,b,w,P,k,z,A,E,q,B,C,D,F,G,H;for(g=r.shape,A=r.strides,E=o.strides,x=l(g.length),"row-major"===r.order?(b=g[4],w=g[3],P=g[2],k=g[1],z=g[0],a=A[4],d=A[3]-b*A[4],i=A[2]-w*A[3],h=A[1]-P*A[2],p=A[0]-k*A[1],m=E[4],y=E[3]-b*E[4],v=E[2]-w*E[3],j=E[1]-P*E[2],u=E[0]-k*E[1]):(b=g[0],w=g[1],P=g[2],k=g[3],z=g[4],a=A[0],d=A[1]-b*A[0],i=A[2]-w*A[1],h=A[3]-P*A[2],p=A[4]-k*A[3],m=E[0],y=E[1]-b*E[0],v=E[2]-w*E[1],j=E[3]-P*E[2],u=E[4]-k*E[3],x=n(x)),q=r.offset,B=o.offset,e=r.data,t=o.data,H=0;H<z;H++){for(G=0;G<k;G++){for(F=0;F<P;F++){for(D=0;D<w;D++){for(C=0;C<b;C++)t[B]=s.call(f,e[q],c([H,G,F,D,C],x),r.ref),q+=a,B+=m;q+=d,B+=y}q+=i,B+=v}q+=h,B+=j}q+=p,B+=u}},function(r,o,s,f){var e,d,i,c,n,h,p,m,y,v,j,u,x,g,b,w,P,k,z,A,E,q,B,C,D,F,G,H,I,J,K,L;for(w=r.shape,B=r.strides,C=o.strides,b=l(w.length),"row-major"===r.order?(P=w[5],k=w[4],z=w[3],A=w[2],E=w[1],q=w[0],i=B[5],c=B[4]-P*B[5],n=B[3]-k*B[4],h=B[2]-z*B[3],p=B[1]-A*B[2],m=B[0]-E*B[1],y=C[5],v=C[4]-P*C[5],j=C[3]-k*C[4],u=C[2]-z*C[3],x=C[1]-A*C[2],g=C[0]-E*C[1]):(P=w[0],k=w[1],z=w[2],A=w[3],E=w[4],q=w[5],i=B[0],c=B[1]-P*B[0],n=B[2]-k*B[1],h=B[3]-z*B[2],p=B[4]-A*B[3],m=B[5]-E*B[4],y=C[0],v=C[1]-P*C[0],j=C[2]-k*C[1],u=C[3]-z*C[2],x=C[4]-A*C[3],g=C[5]-E*C[4],b=a(b)),D=r.offset,F=o.offset,e=r.data,d=o.data,L=0;L<q;L++){for(K=0;K<E;K++){for(J=0;J<A;J++){for(I=0;I<z;I++){for(H=0;H<k;H++){for(G=0;G<P;G++)d[F]=s.call(f,e[D],t([L,K,J,I,H,G],b),r.ref),D+=i,F+=y;D+=c,F+=v}D+=n,F+=j}D+=h,F+=u}D+=p,F+=x}D+=m,F+=g}},function(r,o,s,f){var e,d,i,c,n,h,p,m,y,v,j,u,x,g,b,w,P,k,z,A,E,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q;for(k=r.shape,F=r.strides,G=o.strides,P=l(k.length),"row-major"===r.order?(z=k[6],A=k[5],E=k[4],q=k[3],B=k[2],C=k[1],D=k[0],i=F[6],c=F[5]-z*F[6],n=F[4]-A*F[5],h=F[3]-E*F[4],p=F[2]-q*F[3],m=F[1]-B*F[2],y=F[0]-C*F[1],v=G[6],j=G[5]-z*G[6],u=G[4]-A*G[5],x=G[3]-E*G[4],g=G[2]-q*G[3],b=G[1]-B*G[2],w=G[0]-C*G[1]):(z=k[0],A=k[1],E=k[2],q=k[3],B=k[4],C=k[5],D=k[6],i=F[0],c=F[1]-z*F[0],n=F[2]-A*F[1],h=F[3]-E*F[2],p=F[4]-q*F[3],m=F[5]-B*F[4],y=F[6]-C*F[5],v=G[0],j=G[1]-z*G[0],u=G[2]-A*G[1],x=G[3]-E*G[2],g=G[4]-q*G[3],b=G[5]-B*G[4],w=G[6]-C*G[5],P=a(P)),H=r.offset,I=o.offset,e=r.data,d=o.data,Q=0;Q<D;Q++){for(O=0;O<C;O++){for(N=0;N<B;N++){for(M=0;M<q;M++){for(L=0;L<E;L++){for(K=0;K<A;K++){for(J=0;J<z;J++)d[I]=s.call(f,e[H],t([Q,O,N,M,L,K,J],P),r.ref),H+=i,I+=v;H+=c,I+=j}H+=n,I+=u}H+=h,I+=x}H+=p,I+=g}H+=m,I+=b}H+=y,I+=w}},function(r,o,s,f){var e,d,i,c,n,h,p,m,y,v,j,u,x,g,b,w,P,k,z,A,E,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U;for(A=r.shape,I=r.strides,J=o.strides,z=l(A.length),"row-major"===r.order?(E=A[7],q=A[6],B=A[5],C=A[4],D=A[3],F=A[2],G=A[1],H=A[0],i=I[7],c=I[6]-E*I[7],n=I[5]-q*I[6],h=I[4]-B*I[5],p=I[3]-C*I[4],m=I[2]-D*I[3],y=I[1]-F*I[2],v=I[0]-G*I[1],j=J[7],u=J[6]-E*J[7],x=J[5]-q*J[6],g=J[4]-B*J[5],b=J[3]-C*J[4],w=J[2]-D*J[3],P=J[1]-F*J[2],k=J[0]-G*J[1]):(E=A[0],q=A[1],B=A[2],C=A[3],D=A[4],F=A[5],G=A[6],H=A[7],i=I[0],c=I[1]-E*I[0],n=I[2]-q*I[1],h=I[3]-B*I[2],p=I[4]-C*I[3],m=I[5]-D*I[4],y=I[6]-F*I[5],v=I[7]-G*I[6],j=J[0],u=J[1]-E*J[0],x=J[2]-q*J[1],g=J[3]-B*J[2],b=J[4]-C*J[3],w=J[5]-D*J[4],P=J[6]-F*J[5],k=J[7]-G*J[6],z=a(z)),K=r.offset,L=o.offset,e=r.data,d=o.data,U=0;U<H;U++){for(T=0;T<G;T++){for(S=0;S<F;S++){for(R=0;R<D;R++){for(Q=0;Q<C;Q++){for(O=0;O<B;O++){for(N=0;N<q;N++){for(M=0;M<E;M++)d[L]=s.call(f,e[K],t([U,T,S,R,Q,O,N,M],z),r.ref),K+=i,L+=j;K+=c,L+=u}K+=n,L+=x}K+=h,L+=g}K+=p,L+=b}K+=m,L+=w}K+=y,L+=P}K+=v,L+=k}},function(r,o,s,f){var e,d,i,c,n,h,p,m,y,v,j,u,x,g,b,w,P,k,z,A,E,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y;for(q=r.shape,L=r.strides,M=o.strides,E=l(q.length),"row-major"===r.order?(B=q[8],C=q[7],D=q[6],F=q[5],G=q[4],H=q[3],I=q[2],J=q[1],K=q[0],i=L[8],c=L[7]-B*L[8],n=L[6]-C*L[7],h=L[5]-D*L[6],p=L[4]-F*L[5],m=L[3]-G*L[4],y=L[2]-H*L[3],v=L[1]-I*L[2],j=L[0]-J*L[1],u=M[8],x=M[7]-B*M[8],g=M[6]-C*M[7],b=M[5]-D*M[6],w=M[4]-F*M[5],P=M[3]-G*M[4],k=M[2]-H*M[3],z=M[1]-I*M[2],A=M[0]-J*M[1]):(B=q[0],C=q[1],D=q[2],F=q[3],G=q[4],H=q[5],I=q[6],J=q[7],K=q[8],i=L[0],c=L[1]-B*L[0],n=L[2]-C*L[1],h=L[3]-D*L[2],p=L[4]-F*L[3],m=L[5]-G*L[4],y=L[6]-H*L[5],v=L[7]-I*L[6],j=L[8]-J*L[7],u=M[0],x=M[1]-B*M[0],g=M[2]-C*M[1],b=M[3]-D*M[2],w=M[4]-F*M[3],P=M[5]-G*M[4],k=M[6]-H*M[5],z=M[7]-I*M[6],A=M[8]-J*M[7],E=a(E)),N=r.offset,O=o.offset,e=r.data,d=o.data,Y=0;Y<K;Y++){for(X=0;X<J;X++){for(W=0;W<I;W++){for(V=0;V<H;V++){for(U=0;U<G;U++){for(T=0;T<F;T++){for(S=0;S<D;S++){for(R=0;R<C;R++){for(Q=0;Q<B;Q++)d[O]=s.call(f,e[N],t([Y,X,W,V,U,T,S,R,Q],E),r.ref),N+=i,O+=u;N+=c,O+=x}N+=n,O+=g}N+=h,O+=b}N+=p,O+=w}N+=m,O+=P}N+=y,O+=k}N+=v,O+=z}N+=j,O+=A}},function(r,o,s,f){var e,d,i,c,n,h,p,m,y,v,j,u,x,g,b,w,P,k,z,A,E,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr;for(C=r.shape,O=r.strides,Q=o.strides,B=l(C.length),"row-major"===r.order?(D=C[9],F=C[8],G=C[7],H=C[6],I=C[5],J=C[4],K=C[3],L=C[2],M=C[1],N=C[0],i=O[9],c=O[8]-D*O[9],n=O[7]-F*O[8],h=O[6]-G*O[7],p=O[5]-H*O[6],m=O[4]-I*O[5],y=O[3]-J*O[4],v=O[2]-K*O[3],j=O[1]-L*O[2],u=O[0]-M*O[1],x=Q[9],g=Q[8]-D*Q[9],b=Q[7]-F*Q[8],w=Q[6]-G*Q[7],P=Q[5]-H*Q[6],k=Q[4]-I*Q[5],z=Q[3]-J*Q[4],A=Q[2]-K*Q[3],E=Q[1]-L*Q[2],q=Q[0]-M*Q[1]):(D=C[0],F=C[1],G=C[2],H=C[3],I=C[4],J=C[5],K=C[6],L=C[7],M=C[8],N=C[9],i=O[0],c=O[1]-D*O[0],n=O[2]-F*O[1],h=O[3]-G*O[2],p=O[4]-H*O[3],m=O[5]-I*O[4],y=O[6]-J*O[5],v=O[7]-K*O[6],j=O[8]-L*O[7],u=O[9]-M*O[8],x=Q[0],g=Q[1]-D*Q[0],b=Q[2]-F*Q[1],w=Q[3]-G*Q[2],P=Q[4]-H*Q[3],k=Q[5]-I*Q[4],z=Q[6]-J*Q[5],A=Q[7]-K*Q[6],E=Q[8]-L*Q[7],q=Q[9]-M*Q[8],B=a(B)),R=r.offset,S=o.offset,e=r.data,d=o.data,rr=0;rr<N;rr++){for(_=0;_<M;_++){for($=0;$<L;$++){for(Z=0;Z<K;Z++){for(Y=0;Y<J;Y++){for(X=0;X<I;X++){for(W=0;W<H;W++){for(V=0;V<G;V++){for(U=0;U<F;U++){for(T=0;T<D;T++)d[S]=s.call(f,e[R],t([rr,_,$,Z,Y,X,W,V,U,T],B),r.ref),R+=i,S+=x;R+=c,S+=g}R+=n,S+=b}R+=h,S+=w}R+=p,S+=P}R+=m,S+=k}R+=y,S+=z}R+=v,S+=A}R+=j,S+=E}R+=u,S+=q}}],u=[function(r,o,s,f){o.accessors[1](o.data,o.offset,s.call(f,r.accessors[0](r.data,r.offset),[],r.ref))},function(r,o,s,f){var e,t,a,d,i,c,n,l,h,p;for(n=r.shape[0],i=r.strides[0],c=o.strides[0],l=r.offset,h=o.offset,e=r.data,t=o.data,a=r.accessors[0],d=o.accessors[1],p=0;p<n;p++)d(t,h,s.call(f,a(e,l),[p],r.ref)),l+=i,h+=c},function(r,o,s,f){var e,t,a,d,i,h,p,m,y,v,j,u,x,g,b,w,P,k;for(v=r.shape,x=r.strides,g=o.strides,y=l(v.length),"row-major"===r.order?(j=v[1],u=v[0],i=x[1],h=x[0]-j*x[1],p=g[1],m=g[0]-j*g[1]):(j=v[0],u=v[1],i=x[0],h=x[1]-j*x[0],p=g[0],m=g[1]-j*x[0],y=n(y)),b=r.offset,w=o.offset,e=r.data,t=o.data,a=r.accessors[0],d=o.accessors[1],k=0;k<u;k++){for(P=0;P<j;P++)d(t,w,s.call(f,a(e,b),c([k,P],y),r.ref)),b+=i,w+=p;b+=h,w+=m}},function(r,o,s,f){var e,d,i,c,n,h,p,m,y,v,j,u,x,g,b,w,P,k,z,A,E,q;for(u=r.shape,w=r.strides,P=o.strides,y=l(u.length),"row-major"===r.order?(x=u[2],g=u[1],b=u[0],i=w[2],c=w[1]-x*w[2],n=w[0]-g*w[1],h=P[2],p=P[1]-x*P[2],m=P[0]-g*P[1]):(x=u[0],g=u[1],b=u[2],i=w[0],c=w[1]-x*w[0],n=w[2]-g*w[1],h=P[0],p=P[1]-x*P[0],m=P[2]-g*P[1],y=a(y)),k=r.offset,z=o.offset,e=r.data,d=o.data,v=r.accessors[0],j=o.accessors[1],q=0;q<b;q++){for(E=0;E<g;E++){for(A=0;A<x;A++)j(d,z,s.call(f,v(e,k),t([q,E,A],y),r.ref)),k+=i,z+=h;k+=c,z+=p}k+=n,z+=m}},function(r,o,s,f){var e,a,d,i,c,h,p,m,y,v,j,u,x,g,b,w,P,k,z,A,E,q,B,C,D,F;for(g=r.shape,z=r.strides,A=o.strides,x=l(g.length),"row-major"===r.order?(b=g[3],w=g[2],P=g[1],k=g[0],c=z[3],h=z[2]-b*z[3],p=z[1]-w*z[2],m=z[0]-P*z[1],y=A[3],v=A[2]-b*A[3],j=A[1]-w*A[2],u=A[0]-P*A[1]):(b=g[0],w=g[1],P=g[2],k=g[3],c=z[0],h=z[1]-b*z[0],p=z[2]-w*z[1],m=z[3]-P*z[2],y=A[0],v=A[1]-b*A[0],j=A[2]-w*A[1],u=A[3]-P*A[2],x=n(x)),E=r.offset,q=o.offset,e=r.data,a=o.data,d=r.accessors[0],i=o.accessors[1],F=0;F<k;F++){for(D=0;D<P;D++){for(C=0;C<w;C++){for(B=0;B<b;B++)i(a,q,s.call(f,d(e,E),t([F,D,C,B],x),r.ref)),E+=c,q+=y;E+=h,q+=v}E+=p,q+=j}E+=m,q+=u}},function(r,o,s,f){var e,t,a,d,i,h,p,m,y,v,j,u,x,g,b,w,P,k,z,A,E,q,B,C,D,F,G,H,I,J;for(w=r.shape,q=r.strides,B=o.strides,b=l(w.length),"row-major"===r.order?(P=w[4],k=w[3],z=w[2],A=w[1],E=w[0],i=q[4],h=q[3]-P*q[4],p=q[2]-k*q[3],m=q[1]-z*q[2],y=q[0]-A*q[1],v=B[4],j=B[3]-P*B[4],u=B[2]-k*B[3],x=B[1]-z*B[2],g=B[0]-A*B[1]):(P=w[0],k=w[1],z=w[2],A=w[3],E=w[4],i=q[0],h=q[1]-P*q[0],p=q[2]-k*q[1],m=q[3]-z*q[2],y=q[4]-A*q[3],v=B[0],j=B[1]-P*B[0],u=B[2]-k*B[1],x=B[3]-z*B[2],g=B[4]-A*B[3],b=n(b)),C=r.offset,D=o.offset,e=r.data,t=o.data,a=r.accessors[0],d=o.accessors[1],J=0;J<E;J++){for(I=0;I<A;I++){for(H=0;H<z;H++){for(G=0;G<k;G++){for(F=0;F<P;F++)d(t,D,s.call(f,a(e,C),c([J,I,H,G,F],b),r.ref)),C+=i,D+=v;C+=h,D+=j}C+=p,D+=u}C+=m,D+=x}C+=y,D+=g}},function(r,o,s,f){var e,d,i,c,n,h,p,m,y,v,j,u,x,g,b,w,P,k,z,A,E,q,B,C,D,F,G,H,I,J,K,L,M,N;for(k=r.shape,D=r.strides,F=o.strides,P=l(k.length),"row-major"===r.order?(z=k[5],A=k[4],E=k[3],q=k[2],B=k[1],C=k[0],n=D[5],h=D[4]-z*D[5],p=D[3]-A*D[4],m=D[2]-E*D[3],y=D[1]-q*D[2],v=D[0]-B*D[1],j=F[5],u=F[4]-z*F[5],x=F[3]-A*F[4],g=F[2]-E*F[3],b=F[1]-q*F[2],w=F[0]-B*F[1]):(z=k[0],A=k[1],E=k[2],q=k[3],B=k[4],C=k[5],n=D[0],h=D[1]-z*D[0],p=D[2]-A*D[1],m=D[3]-E*D[2],y=D[4]-q*D[3],v=D[5]-B*D[4],j=F[0],u=F[1]-z*F[0],x=F[2]-A*F[1],g=F[3]-E*F[2],b=F[4]-q*F[3],w=F[5]-B*F[4],P=a(P)),G=r.offset,H=o.offset,e=r.data,d=o.data,i=r.accessors[0],c=o.accessors[1],N=0;N<C;N++){for(M=0;M<B;M++){for(L=0;L<q;L++){for(K=0;K<E;K++){for(J=0;J<A;J++){for(I=0;I<z;I++)c(d,H,s.call(f,i(e,G),t([N,M,L,K,J,I],P),r.ref)),G+=n,H+=j;G+=h,H+=u}G+=p,H+=x}G+=m,H+=g}G+=y,H+=b}G+=v,H+=w}},function(r,o,s,f){var e,t,a,d,i,h,p,m,y,v,j,u,x,g,b,w,P,k,z,A,E,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S;for(A=r.shape,H=r.strides,I=o.strides,z=l(A.length),"row-major"===r.order?(E=A[6],q=A[5],B=A[4],C=A[3],D=A[2],F=A[1],G=A[0],i=H[6],h=H[5]-E*H[6],p=H[4]-q*H[5],m=H[3]-B*H[4],y=H[2]-C*H[3],v=H[1]-D*H[2],j=H[0]-F*H[1],u=I[6],x=I[5]-E*I[6],g=I[4]-q*I[5],b=I[3]-B*I[4],w=I[2]-C*I[3],P=I[1]-D*I[2],k=I[0]-F*I[1]):(E=A[0],q=A[1],B=A[2],C=A[3],D=A[4],F=A[5],G=A[6],i=H[0],h=H[1]-E*H[0],p=H[2]-q*H[1],m=H[3]-B*H[2],y=H[4]-C*H[3],v=H[5]-D*H[4],j=H[6]-F*H[5],u=I[0],x=I[1]-E*I[0],g=I[2]-q*I[1],b=I[3]-B*I[2],w=I[4]-C*I[3],P=I[5]-D*I[4],k=I[6]-F*I[5],z=n(z)),J=r.offset,K=o.offset,e=r.data,t=o.data,a=r.accessors[0],d=o.accessors[1],S=0;S<G;S++){for(R=0;R<F;R++){for(Q=0;Q<D;Q++){for(O=0;O<C;O++){for(N=0;N<B;N++){for(M=0;M<q;M++){for(L=0;L<E;L++)d(t,K,s.call(f,a(e,J),c([S,R,Q,O,N,M,L],z),r.ref)),J+=i,K+=u;J+=h,K+=x}J+=p,K+=g}J+=m,K+=b}J+=y,K+=w}J+=v,K+=P}J+=j,K+=k}},function(r,o,s,f){var e,t,a,d,i,h,p,m,y,v,j,u,x,g,b,w,P,k,z,A,E,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W;for(q=r.shape,K=r.strides,L=o.strides,E=l(q.length),"row-major"===r.order?(B=q[7],C=q[6],D=q[5],F=q[4],G=q[3],H=q[2],I=q[1],J=q[0],i=K[7],h=K[6]-B*K[7],p=K[5]-C*K[6],m=K[4]-D*K[5],y=K[3]-F*K[4],v=K[2]-G*K[3],j=K[1]-H*K[2],u=K[0]-I*K[1],x=L[7],g=L[6]-B*L[7],b=L[5]-C*L[6],w=L[4]-D*L[5],P=L[3]-F*L[4],k=L[2]-G*L[3],z=L[1]-H*L[2],A=L[0]-I*L[1]):(B=q[0],C=q[1],D=q[2],F=q[3],G=q[4],H=q[5],I=q[6],J=q[7],i=K[0],h=K[1]-B*K[0],p=K[2]-C*K[1],m=K[3]-D*K[2],y=K[4]-F*K[3],v=K[5]-G*K[4],j=K[6]-H*K[5],u=K[7]-I*K[6],x=L[0],g=L[1]-B*L[0],b=L[2]-C*L[1],w=L[3]-D*L[2],P=L[4]-F*L[3],k=L[5]-G*L[4],z=L[6]-H*L[5],A=L[7]-I*L[6],E=n(E)),M=r.offset,N=o.offset,e=r.data,t=o.data,a=r.accessors[0],d=o.accessors[1],W=0;W<J;W++){for(V=0;V<I;V++){for(U=0;U<H;U++){for(T=0;T<G;T++){for(S=0;S<F;S++){for(R=0;R<D;R++){for(Q=0;Q<C;Q++){for(O=0;O<B;O++)d(t,N,s.call(f,a(e,M),c([W,V,U,T,S,R,Q,O],E),r.ref)),M+=i,N+=x;M+=h,N+=g}M+=p,N+=b}M+=m,N+=w}M+=y,N+=P}M+=v,N+=k}M+=j,N+=z}M+=u,N+=A}},function(r,o,s,f){var e,d,i,c,n,h,p,m,y,v,j,u,x,g,b,w,P,k,z,A,E,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$;for(C=r.shape,N=r.strides,O=o.strides,B=l(C.length),"row-major"===r.order?(D=C[8],F=C[7],G=C[6],H=C[5],I=C[4],J=C[3],K=C[2],L=C[1],M=C[0],n=N[8],h=N[7]-D*N[8],p=N[6]-F*N[7],m=N[5]-G*N[6],y=N[4]-H*N[5],v=N[3]-I*N[4],j=N[2]-J*N[3],u=N[1]-K*N[2],x=N[0]-L*N[1],g=O[8],b=O[7]-D*O[8],w=O[6]-F*O[7],P=O[5]-G*O[6],k=O[4]-H*O[5],z=O[3]-I*O[4],A=O[2]-J*O[3],E=O[1]-K*O[2],q=O[0]-L*O[1]):(D=C[0],F=C[1],G=C[2],H=C[3],I=C[4],J=C[5],K=C[6],L=C[7],M=C[8],n=N[0],h=N[1]-D*N[0],p=N[2]-F*N[1],m=N[3]-G*N[2],y=N[4]-H*N[3],v=N[5]-I*N[4],j=N[6]-J*N[5],u=N[7]-K*N[6],x=N[8]-L*N[7],g=O[0],b=O[1]-D*O[0],w=O[2]-F*O[1],P=O[3]-G*O[2],k=O[4]-H*O[3],z=O[5]-I*O[4],A=O[6]-J*O[5],E=O[7]-K*O[6],q=O[8]-L*O[7],B=a(B)),Q=r.offset,R=o.offset,e=r.data,d=o.data,i=r.accessors[0],c=o.accessors[1],$=0;$<M;$++){for(Z=0;Z<L;Z++){for(Y=0;Y<K;Y++){for(X=0;X<J;X++){for(W=0;W<I;W++){for(V=0;V<H;V++){for(U=0;U<G;U++){for(T=0;T<F;T++){for(S=0;S<D;S++)c(d,R,s.call(f,i(e,Q),t([$,Z,Y,X,W,V,U,T,S],B),r.ref)),Q+=n,R+=g;Q+=h,R+=b}Q+=p,R+=w}Q+=m,R+=P}Q+=y,R+=k}Q+=v,R+=z}Q+=j,R+=A}Q+=u,R+=E}Q+=x,R+=q}},function(r,o,s,f){var e,t,a,d,i,h,p,m,y,v,j,u,x,g,b,w,P,k,z,A,E,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or,sr;for(F=r.shape,R=r.strides,S=o.strides,D=l(F.length),"row-major"===r.order?(G=F[9],H=F[8],I=F[7],J=F[6],K=F[5],L=F[4],M=F[3],N=F[2],O=F[1],Q=F[0],i=R[9],h=R[8]-G*R[9],p=R[7]-H*R[8],m=R[6]-I*R[7],y=R[5]-J*R[6],v=R[4]-K*R[5],j=R[3]-L*R[4],u=R[2]-M*R[3],x=R[1]-N*R[2],g=R[0]-O*R[1],b=S[9],w=S[8]-G*S[9],P=S[7]-H*S[8],k=S[6]-I*S[7],z=S[5]-J*S[6],A=S[4]-K*S[5],E=S[3]-L*S[4],q=S[2]-M*S[3],B=S[1]-N*S[2],C=S[0]-O*S[1]):(G=F[0],H=F[1],I=F[2],J=F[3],K=F[4],L=F[5],M=F[6],N=F[7],O=F[8],Q=F[9],i=R[0],h=R[1]-G*R[0],p=R[2]-H*R[1],m=R[3]-I*R[2],y=R[4]-J*R[3],v=R[5]-K*R[4],j=R[6]-L*R[5],u=R[7]-M*R[6],x=R[8]-N*R[7],g=R[9]-O*R[8],b=S[0],w=S[1]-G*S[0],P=S[2]-H*S[1],k=S[3]-I*S[2],z=S[4]-J*S[3],A=S[5]-K*S[4],E=S[6]-L*S[5],q=S[7]-M*S[6],B=S[8]-N*S[7],C=S[9]-O*S[8],D=n(D)),T=r.offset,U=o.offset,e=r.data,t=o.data,a=r.accessors[0],d=o.accessors[1],sr=0;sr<Q;sr++){for(or=0;or<O;or++){for(rr=0;rr<N;rr++){for(_=0;_<M;_++){for($=0;$<L;$++){for(Z=0;Z<K;Z++){for(Y=0;Y<J;Y++){for(X=0;X<I;X++){for(W=0;W<H;W++){for(V=0;V<G;V++)d(t,U,s.call(f,a(e,T),c([sr,or,rr,_,$,Z,Y,X,W,V],D),r.ref)),T+=i,U+=b;T+=h,U+=w}T+=p,U+=P}T+=m,U+=k}T+=y,U+=z}T+=v,U+=A}T+=j,U+=E}T+=u,U+=q}T+=x,U+=B}T+=g,U+=C}}],x=[function(r,o,s,e){var d,c,n,l,h,p,m,y,v,j,u,x,g,b,w,P,k,z,A,E,q,B,C,D;for(u=(D=f(r.shape,r.strides,o.strides)).sh,b=D.sx,w=D.sy,j=a(D.idx),d=i(r.dtype,o.dtype),P=r.offset,k=o.offset,c=r.data,n=o.data,l=b[0],p=w[0],C=u[1];C>0;)for(C<d?(g=C,C=0):(g=d,C-=d),y=P+C*b[1],v=k+C*w[1],B=u[0];B>0;)for(B<d?(x=B,B=0):(x=d,B-=d),z=y+B*b[0],A=v+B*w[0],h=b[1]-x*b[0],m=w[1]-x*w[0],q=0;q<g;q++){for(E=0;E<x;E++)n[A]=s.call(e,c[z],t([q,E],j),r.ref),z+=l,A+=p;z+=h,A+=m}},function(r,o,s,f){var t,i,n,l,h,p,m,y,v,j,u,x,g,b,w,P,k,z,A,E,q,B,C,D,F,G,H,I,J,K,L;for(w=(L=d(r.shape,r.strides,o.strides)).sh,A=L.sx,E=L.sy,b=a(L.idx),t=e(r.dtype,o.dtype),q=r.offset,B=o.offset,i=r.data,n=o.data,l=A[0],m=E[0],K=w[2];K>0;)for(K<t?(z=K,K=0):(z=t,K-=t),u=q+K*A[2],g=B+K*E[2],J=w[1];J>0;)for(J<t?(k=J,J=0):(k=t,J-=t),p=A[2]-k*A[1],v=E[2]-k*E[1],j=u+J*A[1],x=g+J*E[1],I=w[0];I>0;)for(I<t?(P=I,I=0):(P=t,I-=t),C=j+I*A[0],D=x+I*E[0],h=A[1]-P*A[0],y=E[1]-P*E[0],H=0;H<z;H++){for(G=0;G<k;G++){for(F=0;F<P;F++)n[D]=s.call(f,i[C],c([H,G,F],b),r.ref),C+=l,D+=m;C+=h,D+=y}C+=p,D+=v}},function(r,o,s,d){var i,c,n,l,h,p,m,y,v,j,u,x,g,b,w,P,k,z,A,E,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T;for(A=(T=f(r.shape,r.strides,o.strides)).sh,D=T.sx,F=T.sy,w=a(T.idx),i=e(r.dtype,o.dtype),G=r.offset,H=o.offset,c=r.data,n=o.data,l=D[0],y=F[0],S=A[3];S>0;)for(S<i?(C=S,S=0):(C=i,S-=i),b=G+S*D[3],z=H+S*F[3],R=A[2];R>0;)for(R<i?(B=R,R=0):(B=i,R-=i),m=D[3]-B*D[2],u=F[3]-B*F[2],g=b+R*D[2],k=z+R*F[2],Q=A[1];Q>0;)for(Q<i?(q=Q,Q=0):(q=i,Q-=i),p=D[2]-q*D[1],j=F[2]-q*F[1],x=g+Q*D[1],P=k+Q*F[1],O=A[0];O>0;)for(O<i?(E=O,O=0):(E=i,O-=i),I=x+O*D[0],J=P+O*F[0],h=D[1]-E*D[0],v=F[1]-E*F[0],N=0;N<C;N++){for(M=0;M<B;M++){for(L=0;L<q;L++){for(K=0;K<E;K++)n[J]=s.call(d,c[I],t([N,M,L,K],w),r.ref),I+=l,J+=y;I+=h,J+=v}I+=p,J+=j}I+=m,J+=u}},function(r,o,s,f){var t,i,n,l,h,p,m,y,v,j,u,x,g,b,w,P,k,z,A,E,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$;for(C=($=d(r.shape,r.strides,o.strides)).sh,J=$.sx,K=$.sy,z=a($.idx),t=e(r.dtype,o.dtype),L=r.offset,M=o.offset,i=r.data,n=o.data,l=J[0],v=K[0],Z=C[4];Z>0;)for(Z<t?(I=Z,Z=0):(I=t,Z-=t),k=L+Z*J[4],B=M+Z*K[4],Y=C[3];Y>0;)for(Y<t?(H=Y,Y=0):(H=t,Y-=t),y=J[4]-H*J[3],g=K[4]-H*K[3],P=k+Y*J[3],q=B+Y*K[3],X=C[2];X>0;)for(X<t?(G=X,X=0):(G=t,X-=t),m=J[3]-G*J[2],x=K[3]-G*K[2],w=P+X*J[2],E=q+X*K[2],W=C[1];W>0;)for(W<t?(F=W,W=0):(F=t,W-=t),p=J[2]-F*J[1],u=K[2]-F*K[1],b=w+W*J[1],A=E+W*K[1],V=C[0];V>0;)for(V<t?(D=V,V=0):(D=t,V-=t),N=b+V*J[0],O=A+V*K[0],h=J[1]-D*J[0],j=K[1]-D*K[0],U=0;U<I;U++){for(T=0;T<H;T++){for(S=0;S<G;S++){for(R=0;R<F;R++){for(Q=0;Q<D;Q++)n[O]=s.call(f,i[N],c([U,T,S,R,Q],z),r.ref),N+=l,O+=v;N+=h,O+=j}N+=p,O+=u}N+=m,O+=x}N+=y,O+=g}},function(r,o,s,f){var t,i,n,l,h,p,m,y,v,j,u,x,g,b,w,P,k,z,A,E,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or,sr,fr,er,tr;for(H=(tr=d(r.shape,r.strides,o.strides)).sh,O=tr.sx,Q=tr.sy,G=a(tr.idx),t=e(r.dtype,o.dtype),R=r.offset,S=o.offset,i=r.data,n=o.data,l=O[0],j=Q[0],er=H[5];er>0;)for(er<t?(N=er,er=0):(N=t,er-=t),E=R+er*O[5],F=S+er*Q[5],fr=H[4];fr>0;)for(fr<t?(M=fr,fr=0):(M=t,fr-=t),v=O[5]-M*O[4],w=Q[5]-M*Q[4],A=E+fr*O[4],D=F+fr*Q[4],sr=H[3];sr>0;)for(sr<t?(L=sr,sr=0):(L=t,sr-=t),y=O[4]-L*O[3],b=Q[4]-L*Q[3],z=A+sr*O[3],C=D+sr*Q[3],or=H[2];or>0;)for(or<t?(K=or,or=0):(K=t,or-=t),m=O[3]-K*O[2],g=Q[3]-K*Q[2],k=z+or*O[2],B=C+or*Q[2],rr=H[1];rr>0;)for(rr<t?(J=rr,rr=0):(J=t,rr-=t),p=O[2]-J*O[1],x=Q[2]-J*Q[1],P=k+rr*O[1],q=B+rr*Q[1],_=H[0];_>0;)for(_<t?(I=_,_=0):(I=t,_-=t),T=P+_*O[0],U=q+_*Q[0],h=O[1]-I*O[0],u=Q[1]-I*Q[0],$=0;$<N;$++){for(Z=0;Z<M;Z++){for(Y=0;Y<L;Y++){for(X=0;X<K;X++){for(W=0;W<J;W++){for(V=0;V<I;V++)n[U]=s.call(f,i[T],c([$,Z,Y,X,W,V],G),r.ref),T+=l,U+=j;T+=h,U+=u}T+=p,U+=x}T+=m,U+=g}T+=y,U+=b}T+=v,U+=w}},function(r,o,s,f){var t,i,n,l,h,p,m,y,v,j,u,x,g,b,w,P,k,z,A,E,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or,sr,fr,er,tr,ar,dr,ir,cr,nr,lr,hr;for(L=(hr=d(r.shape,r.strides,o.strides)).sh,U=hr.sx,V=hr.sy,K=a(hr.idx),t=e(r.dtype,o.dtype),W=r.offset,X=o.offset,i=r.data,n=o.data,l=U[0],u=V[0],lr=L[6];lr>0;)for(lr<t?(T=lr,lr=0):(T=t,lr-=t),C=W+lr*U[6],J=X+lr*V[6],nr=L[5];nr>0;)for(nr<t?(S=nr,nr=0):(S=t,nr-=t),j=U[6]-S*U[5],k=V[6]-S*V[5],B=C+nr*U[5],I=J+nr*V[5],cr=L[4];cr>0;)for(cr<t?(R=cr,cr=0):(R=t,cr-=t),v=U[5]-R*U[4],P=V[5]-R*V[4],q=B+cr*U[4],H=I+cr*V[4],ir=L[3];ir>0;)for(ir<t?(Q=ir,ir=0):(Q=t,ir-=t),y=U[4]-Q*U[3],w=V[4]-Q*V[3],E=q+ir*U[3],G=H+ir*V[3],dr=L[2];dr>0;)for(dr<t?(O=dr,dr=0):(O=t,dr-=t),m=U[3]-O*U[2],b=V[3]-O*V[2],A=E+dr*U[2],F=G+dr*V[2],ar=L[1];ar>0;)for(ar<t?(N=ar,ar=0):(N=t,ar-=t),p=U[2]-N*U[1],g=V[2]-N*V[1],z=A+ar*U[1],D=F+ar*V[1],tr=L[0];tr>0;)for(tr<t?(M=tr,tr=0):(M=t,tr-=t),Y=z+tr*U[0],Z=D+tr*V[0],h=U[1]-M*U[0],x=V[1]-M*V[0],er=0;er<T;er++){for(fr=0;fr<S;fr++){for(sr=0;sr<R;sr++){for(or=0;or<Q;or++){for(rr=0;rr<O;rr++){for(_=0;_<N;_++){for($=0;$<M;$++)n[Z]=s.call(f,i[Y],c([er,fr,sr,or,rr,_,$],K),r.ref),Y+=l,Z+=u;Y+=h,Z+=x}Y+=p,Z+=g}Y+=m,Z+=b}Y+=y,Z+=w}Y+=v,Z+=P}Y+=j,Z+=k}},function(r,o,s,d){var i,c,n,l,h,p,m,y,v,j,u,x,g,b,w,P,k,z,A,E,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or,sr,fr,er,tr,ar,dr,ir,cr,nr,lr,hr,pr,mr,yr,vr,jr,ur,xr;for(Q=(xr=f(r.shape,r.strides,o.strides)).sh,Z=xr.sx,$=xr.sy,O=a(xr.idx),i=e(r.dtype,o.dtype),_=r.offset,rr=o.offset,c=r.data,n=o.data,l=Z[0],x=$[0],ur=Q[7];ur>0;)for(ur<i?(Y=ur,ur=0):(Y=i,ur-=i),G=_+ur*Z[7],N=rr+ur*$[7],jr=Q[6];jr>0;)for(jr<i?(X=jr,jr=0):(X=i,jr-=i),u=Z[7]-X*Z[6],A=$[7]-X*$[6],F=G+jr*Z[6],M=N+jr*$[6],vr=Q[5];vr>0;)for(vr<i?(W=vr,vr=0):(W=i,vr-=i),j=Z[6]-W*Z[5],z=$[6]-W*$[5],D=F+vr*Z[5],L=M+vr*$[5],yr=Q[4];yr>0;)for(yr<i?(V=yr,yr=0):(V=i,yr-=i),v=Z[5]-V*Z[4],k=$[5]-V*$[4],C=D+yr*Z[4],K=L+yr*$[4],mr=Q[3];mr>0;)for(mr<i?(U=mr,mr=0):(U=i,mr-=i),y=Z[4]-U*Z[3],P=$[4]-U*$[3],B=C+mr*Z[3],J=K+mr*$[3],pr=Q[2];pr>0;)for(pr<i?(T=pr,pr=0):(T=i,pr-=i),m=Z[3]-T*Z[2],w=$[3]-T*$[2],q=B+pr*Z[2],I=J+pr*$[2],hr=Q[1];hr>0;)for(hr<i?(S=hr,hr=0):(S=i,hr-=i),p=Z[2]-S*Z[1],b=$[2]-S*$[1],E=q+hr*Z[1],H=I+hr*$[1],lr=Q[0];lr>0;)for(lr<i?(R=lr,lr=0):(R=i,lr-=i),or=E+lr*Z[0],sr=H+lr*$[0],h=Z[1]-R*Z[0],g=$[1]-R*$[0],nr=0;nr<Y;nr++){for(cr=0;cr<X;cr++){for(ir=0;ir<W;ir++){for(dr=0;dr<V;dr++){for(ar=0;ar<U;ar++){for(tr=0;tr<T;tr++){for(er=0;er<S;er++){for(fr=0;fr<R;fr++)n[sr]=s.call(d,c[or],t([nr,cr,ir,dr,ar,tr,er,fr],O),r.ref),or+=l,sr+=x;or+=h,sr+=g}or+=p,sr+=b}or+=m,sr+=w}or+=y,sr+=P}or+=v,sr+=k}or+=j,sr+=z}or+=u,sr+=A}},function(r,o,s,f){var i,c,n,l,h,p,m,y,v,j,u,x,g,b,w,P,k,z,A,E,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or,sr,fr,er,tr,ar,dr,ir,cr,nr,lr,hr,pr,mr,yr,vr,jr,ur,xr,gr,br,wr,Pr,kr,zr,Ar;for(U=(Ar=d(r.shape,r.strides,o.strides)).sh,sr=Ar.sx,fr=Ar.sy,T=a(Ar.idx),i=e(r.dtype,o.dtype),er=r.offset,tr=o.offset,c=r.data,n=o.data,l=sr[0],g=fr[0],zr=U[8];zr>0;)for(zr<i?(or=zr,zr=0):(or=i,zr-=i),J=er+zr*sr[8],S=tr+zr*fr[8],kr=U[7];kr>0;)for(kr<i?(rr=kr,kr=0):(rr=i,kr-=i),x=sr[8]-rr*sr[7],q=fr[8]-rr*fr[7],I=J+kr*sr[7],R=S+kr*fr[7],Pr=U[6];Pr>0;)for(Pr<i?(_=Pr,Pr=0):(_=i,Pr-=i),u=sr[7]-_*sr[6],E=fr[7]-_*fr[6],H=I+Pr*sr[6],Q=R+Pr*fr[6],wr=U[5];wr>0;)for(wr<i?($=wr,wr=0):($=i,wr-=i),j=sr[6]-$*sr[5],A=fr[6]-$*fr[5],G=H+wr*sr[5],O=Q+wr*fr[5],br=U[4];br>0;)for(br<i?(Z=br,br=0):(Z=i,br-=i),v=sr[5]-Z*sr[4],z=fr[5]-Z*fr[4],F=G+br*sr[4],N=O+br*fr[4],gr=U[3];gr>0;)for(gr<i?(Y=gr,gr=0):(Y=i,gr-=i),y=sr[4]-Y*sr[3],k=fr[4]-Y*fr[3],D=F+gr*sr[3],M=N+gr*fr[3],xr=U[2];xr>0;)for(xr<i?(X=xr,xr=0):(X=i,xr-=i),m=sr[3]-X*sr[2],P=fr[3]-X*fr[2],C=D+xr*sr[2],L=M+xr*fr[2],ur=U[1];ur>0;)for(ur<i?(W=ur,ur=0):(W=i,ur-=i),p=sr[2]-W*sr[1],w=fr[2]-W*fr[1],B=C+ur*sr[1],K=L+ur*fr[1],jr=U[0];jr>0;)for(jr<i?(V=jr,jr=0):(V=i,jr-=i),ar=B+jr*sr[0],dr=K+jr*fr[0],h=sr[1]-V*sr[0],b=fr[1]-V*fr[0],vr=0;vr<or;vr++){for(yr=0;yr<rr;yr++){for(mr=0;mr<_;mr++){for(pr=0;pr<$;pr++){for(hr=0;hr<Z;hr++){for(lr=0;lr<Y;lr++){for(nr=0;nr<X;nr++){for(cr=0;cr<W;cr++){for(ir=0;ir<V;ir++)n[dr]=s.call(f,c[ar],t([vr,yr,mr,pr,hr,lr,nr,cr,ir],T),r.ref),ar+=l,dr+=g;ar+=h,dr+=b}ar+=p,dr+=w}ar+=m,dr+=P}ar+=y,dr+=k}ar+=v,dr+=z}ar+=j,dr+=A}ar+=u,dr+=E}ar+=x,dr+=q}},function(r,o,s,f){var e,t,a,l,h,p,m,y,v,j,u,x,g,b,w,P,k,z,A,E,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or,sr,fr,er,tr,ar,dr,ir,cr,nr,lr,hr,pr,mr,yr,vr,jr,ur,xr,gr,br,wr,Pr,kr,zr,Ar,Er,qr,Br,Cr,Dr,Fr,Gr;for(Y=(Gr=d(r.shape,r.strides,o.strides)).sh,dr=Gr.sx,ir=Gr.sy,X=n(Gr.idx),e=i(r.dtype,o.dtype),cr=r.offset,nr=o.offset,t=r.data,a=o.data,l=dr[0],b=ir[0],Fr=Y[9];Fr>0;)for(Fr<e?(ar=Fr,Fr=0):(ar=e,Fr-=e),M=cr+Fr*dr[9],W=nr+Fr*ir[9],Dr=Y[8];Dr>0;)for(Dr<e?(tr=Dr,Dr=0):(tr=e,Dr-=e),g=dr[9]-tr*dr[8],C=ir[9]-tr*ir[8],L=M+Dr*dr[8],V=W+Dr*ir[8],Cr=Y[7];Cr>0;)for(Cr<e?(er=Cr,Cr=0):(er=e,Cr-=e),x=dr[8]-er*dr[7],B=ir[8]-er*ir[7],K=L+Cr*dr[7],U=V+Cr*ir[7],Br=Y[6];Br>0;)for(Br<e?(fr=Br,Br=0):(fr=e,Br-=e),u=dr[7]-fr*dr[6],q=ir[7]-fr*ir[6],J=K+Br*dr[6],T=U+Br*ir[6],qr=Y[5];qr>0;)for(qr<e?(sr=qr,qr=0):(sr=e,qr-=e),j=dr[6]-sr*dr[5],E=ir[6]-sr*ir[5],I=J+qr*dr[5],S=T+qr*ir[5],Er=Y[4];Er>0;)for(Er<e?(or=Er,Er=0):(or=e,Er-=e),v=dr[5]-or*dr[4],A=ir[5]-or*ir[4],H=I+Er*dr[4],R=S+Er*ir[4],Ar=Y[3];Ar>0;)for(Ar<e?(rr=Ar,Ar=0):(rr=e,Ar-=e),y=dr[4]-rr*dr[3],z=ir[4]-rr*ir[3],G=H+Ar*dr[3],Q=R+Ar*ir[3],zr=Y[2];zr>0;)for(zr<e?(_=zr,zr=0):(_=e,zr-=e),m=dr[3]-_*dr[2],k=ir[3]-_*ir[2],F=G+zr*dr[2],O=Q+zr*ir[2],kr=Y[1];kr>0;)for(kr<e?($=kr,kr=0):($=e,kr-=e),p=dr[2]-$*dr[1],P=ir[2]-$*ir[1],D=F+kr*dr[1],N=O+kr*ir[1],Pr=Y[0];Pr>0;)for(Pr<e?(Z=Pr,Pr=0):(Z=e,Pr-=e),lr=D+Pr*dr[0],hr=N+Pr*ir[0],h=dr[1]-Z*dr[0],w=ir[1]-Z*ir[0],wr=0;wr<ar;wr++){for(br=0;br<tr;br++){for(gr=0;gr<er;gr++){for(xr=0;xr<fr;xr++){for(ur=0;ur<sr;ur++){for(jr=0;jr<or;jr++){for(vr=0;vr<rr;vr++){for(yr=0;yr<_;yr++){for(mr=0;mr<$;mr++){for(pr=0;pr<Z;pr++)a[hr]=s.call(f,t[lr],c([wr,br,gr,xr,ur,jr,vr,yr,mr,pr],X),r.ref),lr+=l,hr+=b;lr+=h,hr+=w}lr+=p,hr+=P}lr+=m,hr+=k}lr+=y,hr+=z}lr+=v,hr+=A}lr+=j,hr+=E}lr+=u,hr+=q}lr+=x,hr+=B}lr+=g,hr+=C}}],g=[function(r,o,s,d){var i,c,n,l,h,p,m,y,v,j,u,x,g,b,w,P,k,z,A,E,q,B,C,D,F,G;for(g=(G=f(r.shape,r.strides,o.strides)).sh,P=G.sx,k=G.sy,j=a(G.idx),i=e(r.dtype,o.dtype),z=r.offset,A=o.offset,c=r.data,n=o.data,l=P[0],p=k[0],F=g[1];F>0;)for(F<i?(w=F,F=0):(w=i,F-=i),y=z+F*P[1],v=A+F*k[1],D=g[0];D>0;)for(D<i?(b=D,D=0):(b=i,D-=i),E=y+D*P[0],q=v+D*k[0],h=P[1]-b*P[0],m=k[1]-b*k[0],u=r.accessors[0],x=o.accessors[1],C=0;C<w;C++){for(B=0;B<b;B++)x(n,q,s.call(d,u(c,E),t([C,B],j),r.ref)),E+=l,q+=p;E+=h,q+=m}},function(r,o,s,f){var i,c,n,l,h,p,m,y,v,j,u,x,g,b,w,P,k,z,A,E,q,B,C,D,F,G,H,I,J,K,L,M,N;for(k=(N=d(r.shape,r.strides,o.strides)).sh,q=N.sx,B=N.sy,b=a(N.idx),i=e(r.dtype,o.dtype),C=r.offset,D=o.offset,c=r.data,n=o.data,l=q[0],m=B[0],w=r.accessors[0],P=o.accessors[1],M=k[2];M>0;)for(M<i?(E=M,M=0):(E=i,M-=i),u=C+M*q[2],g=D+M*B[2],L=k[1];L>0;)for(L<i?(A=L,L=0):(A=i,L-=i),p=q[2]-A*q[1],v=B[2]-A*B[1],j=u+L*q[1],x=g+L*B[1],K=k[0];K>0;)for(K<i?(z=K,K=0):(z=i,K-=i),F=j+K*q[0],G=x+K*B[0],h=q[1]-z*q[0],y=B[1]-z*B[0],J=0;J<E;J++){for(I=0;I<A;I++){for(H=0;H<z;H++)P(n,G,s.call(f,w(c,F),t([J,I,H],b),r.ref)),F+=l,G+=m;F+=h,G+=y}F+=p,G+=v}},function(r,o,s,f){var e,c,n,l,h,p,m,y,v,j,u,x,g,b,w,P,k,z,A,E,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V;for(q=(V=d(r.shape,r.strides,o.strides)).sh,G=V.sx,H=V.sy,k=a(V.idx),e=i(r.dtype,o.dtype),I=r.offset,J=o.offset,c=r.data,n=o.data,p=G[0],j=H[0],U=q[3];U>0;)for(U<e?(F=U,U=0):(F=e,U-=e),P=I+U*G[3],E=J+U*H[3],T=q[2];T>0;)for(T<e?(D=T,T=0):(D=e,T-=e),v=G[3]-D*G[2],g=H[3]-D*H[2],w=P+T*G[2],A=E+T*H[2],S=q[1];S>0;)for(S<e?(C=S,S=0):(C=e,S-=e),y=G[2]-C*G[1],x=H[2]-C*H[1],b=w+S*G[1],z=A+S*H[1],R=q[0];R>0;)for(R<e?(B=R,R=0):(B=e,R-=e),K=b+R*G[0],L=z+R*H[0],m=G[1]-B*G[0],u=H[1]-B*H[0],l=r.accessors[0],h=o.accessors[1],Q=0;Q<F;Q++){for(O=0;O<D;O++){for(N=0;N<C;N++){for(M=0;M<B;M++)h(n,L,s.call(f,l(c,K),t([Q,O,N,M],k),r.ref)),K+=p,L+=j;K+=m,L+=u}K+=y,L+=x}K+=v,L+=g}},function(r,o,s,f){var i,c,n,l,h,p,m,y,v,j,u,x,g,b,w,P,k,z,A,E,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr;for(F=(rr=d(r.shape,r.strides,o.strides)).sh,L=rr.sx,M=rr.sy,E=a(rr.idx),i=e(r.dtype,o.dtype),N=r.offset,O=o.offset,c=r.data,n=o.data,p=L[0],u=M[0],l=r.accessors[0],h=o.accessors[1],_=F[4];_>0;)for(_<i?(K=_,_=0):(K=i,_-=i),A=N+_*L[4],D=O+_*M[4],$=F[3];$>0;)for($<i?(J=$,$=0):(J=i,$-=i),j=L[4]-J*L[3],w=M[4]-J*M[3],z=A+$*L[3],C=D+$*M[3],Z=F[2];Z>0;)for(Z<i?(I=Z,Z=0):(I=i,Z-=i),v=L[3]-I*L[2],b=M[3]-I*M[2],k=z+Z*L[2],B=C+Z*M[2],Y=F[1];Y>0;)for(Y<i?(H=Y,Y=0):(H=i,Y-=i),y=L[2]-H*L[1],g=M[2]-H*M[1],P=k+Y*L[1],q=B+Y*M[1],X=F[0];X>0;)for(X<i?(G=X,X=0):(G=i,X-=i),Q=P+X*L[0],R=q+X*M[0],m=L[1]-G*L[0],x=M[1]-G*M[0],W=0;W<K;W++){for(V=0;V<J;V++){for(U=0;U<I;U++){for(T=0;T<H;T++){for(S=0;S<G;S++)h(n,R,s.call(f,l(c,Q),t([W,V,U,T,S],E),r.ref)),Q+=p,R+=u;Q+=m,R+=x}Q+=y,R+=g}Q+=v,R+=b}Q+=j,R+=w}},function(r,o,s,f){var i,c,n,l,h,p,m,y,v,j,u,x,g,b,w,P,k,z,A,E,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or,sr,fr,er,tr,ar,dr;for(J=(dr=d(r.shape,r.strides,o.strides)).sh,R=dr.sx,S=dr.sy,I=a(dr.idx),i=e(r.dtype,o.dtype),T=r.offset,U=o.offset,c=r.data,n=o.data,p=R[0],x=S[0],h=r.accessors[0],l=o.accessors[1],ar=J[5];ar>0;)for(ar<i?(Q=ar,ar=0):(Q=i,ar-=i),B=T+ar*R[5],H=U+ar*S[5],tr=J[4];tr>0;)for(tr<i?(O=tr,tr=0):(O=i,tr-=i),u=R[5]-O*R[4],k=S[5]-O*S[4],q=B+tr*R[4],G=H+tr*S[4],er=J[3];er>0;)for(er<i?(N=er,er=0):(N=i,er-=i),j=R[4]-N*R[3],P=S[4]-N*S[3],E=q+er*R[3],F=G+er*S[3],fr=J[2];fr>0;)for(fr<i?(M=fr,fr=0):(M=i,fr-=i),v=R[3]-M*R[2],w=S[3]-M*S[2],A=E+fr*R[2],D=F+fr*S[2],sr=J[1];sr>0;)for(sr<i?(L=sr,sr=0):(L=i,sr-=i),y=R[2]-L*R[1],b=S[2]-L*S[1],z=A+sr*R[1],C=D+sr*S[1],or=J[0];or>0;)for(or<i?(K=or,or=0):(K=i,or-=i),V=z+or*R[0],W=C+or*S[0],m=R[1]-K*R[0],g=S[1]-K*S[0],rr=0;rr<Q;rr++){for(_=0;_<O;_++){for($=0;$<N;$++){for(Z=0;Z<M;Z++){for(Y=0;Y<L;Y++){for(X=0;X<K;X++)l(n,W,s.call(f,h(c,V),t([rr,_,$,Z,Y,X],I),r.ref)),V+=p,W+=x;V+=m,W+=g}V+=y,W+=b}V+=v,W+=w}V+=j,W+=P}V+=u,W+=k}},function(r,o,s,f){var e,c,n,l,h,p,m,y,v,j,u,x,g,b,w,P,k,z,A,E,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or,sr,fr,er,tr,ar,dr,ir,cr,nr,lr,hr,pr,mr;for(N=(mr=d(r.shape,r.strides,o.strides)).sh,W=mr.sx,X=mr.sy,M=a(mr.idx),e=i(r.dtype,o.dtype),Y=r.offset,Z=o.offset,c=r.data,n=o.data,p=W[0],g=X[0],l=r.accessors[0],h=o.accessors[1],pr=N[6];pr>0;)for(pr<e?(V=pr,pr=0):(V=e,pr-=e),F=Y+pr*W[6],L=Z+pr*X[6],hr=N[5];hr>0;)for(hr<e?(U=hr,hr=0):(U=e,hr-=e),x=W[6]-U*W[5],A=X[6]-U*X[5],D=F+hr*W[5],K=L+hr*X[5],lr=N[4];lr>0;)for(lr<e?(T=lr,lr=0):(T=e,lr-=e),u=W[5]-T*W[4],z=X[5]-T*X[4],C=D+lr*W[4],J=K+lr*X[4],nr=N[3];nr>0;)for(nr<e?(S=nr,nr=0):(S=e,nr-=e),j=W[4]-S*W[3],k=X[4]-S*X[3],B=C+nr*W[3],I=J+nr*X[3],cr=N[2];cr>0;)for(cr<e?(R=cr,cr=0):(R=e,cr-=e),v=W[3]-R*W[2],P=X[3]-R*X[2],q=B+cr*W[2],H=I+cr*X[2],ir=N[1];ir>0;)for(ir<e?(Q=ir,ir=0):(Q=e,ir-=e),y=W[2]-Q*W[1],w=X[2]-Q*X[1],E=q+ir*W[1],G=H+ir*X[1],dr=N[0];dr>0;)for(dr<e?(O=dr,dr=0):(O=e,dr-=e),$=E+dr*W[0],_=G+dr*X[0],m=W[1]-O*W[0],b=X[1]-O*X[0],ar=0;ar<V;ar++){for(tr=0;tr<U;tr++){for(er=0;er<T;er++){for(fr=0;fr<S;fr++){for(sr=0;sr<R;sr++){for(or=0;or<Q;or++){for(rr=0;rr<O;rr++)h(n,_,s.call(f,l(c,$),t([ar,tr,er,fr,sr,or,rr],M),r.ref)),$+=p,_+=g;$+=m,_+=b}$+=y,_+=w}$+=v,_+=P}$+=j,_+=k}$+=u,_+=z}$+=x,_+=A}},function(r,o,s,f){var i,c,n,l,h,p,m,y,v,j,u,x,g,b,w,P,k,z,A,E,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or,sr,fr,er,tr,ar,dr,ir,cr,nr,lr,hr,pr,mr,yr,vr,jr,ur,xr,gr,br;for(S=(br=d(r.shape,r.strides,o.strides)).sh,_=br.sx,rr=br.sy,R=a(br.idx),i=e(r.dtype,o.dtype),or=r.offset,sr=o.offset,c=r.data,n=o.data,p=_[0],b=rr[0],l=r.accessors[0],h=o.accessors[1],gr=S[7];gr>0;)for(gr<i?($=gr,gr=0):($=i,gr-=i),I=or+gr*_[7],Q=sr+gr*rr[7],xr=S[6];xr>0;)for(xr<i?(Z=xr,xr=0):(Z=i,xr-=i),g=_[7]-Z*_[6],q=rr[7]-Z*rr[6],H=I+xr*_[6],O=Q+xr*rr[6],ur=S[5];ur>0;)for(ur<i?(Y=ur,ur=0):(Y=i,ur-=i),x=_[6]-Y*_[5],E=rr[6]-Y*rr[5],G=H+ur*_[5],N=O+ur*rr[5],jr=S[4];jr>0;)for(jr<i?(X=jr,jr=0):(X=i,jr-=i),u=_[5]-X*_[4],A=rr[5]-X*rr[4],F=G+jr*_[4],M=N+jr*rr[4],vr=S[3];vr>0;)for(vr<i?(W=vr,vr=0):(W=i,vr-=i),j=_[4]-W*_[3],z=rr[4]-W*rr[3],D=F+vr*_[3],L=M+vr*rr[3],yr=S[2];yr>0;)for(yr<i?(V=yr,yr=0):(V=i,yr-=i),v=_[3]-V*_[2],k=rr[3]-V*rr[2],C=D+yr*_[2],K=L+yr*rr[2],mr=S[1];mr>0;)for(mr<i?(U=mr,mr=0):(U=i,mr-=i),y=_[2]-U*_[1],P=rr[2]-U*rr[1],B=C+mr*_[1],J=K+mr*rr[1],pr=S[0];pr>0;)for(pr<i?(T=pr,pr=0):(T=i,pr-=i),fr=B+pr*_[0],er=J+pr*rr[0],m=_[1]-T*_[0],w=rr[1]-T*rr[0],hr=0;hr<$;hr++){for(lr=0;lr<Z;lr++){for(nr=0;nr<Y;nr++){for(cr=0;cr<X;cr++){for(ir=0;ir<W;ir++){for(dr=0;dr<V;dr++){for(ar=0;ar<U;ar++){for(tr=0;tr<T;tr++)h(n,er,s.call(f,l(c,fr),t([hr,lr,nr,cr,ir,dr,ar,tr],R),r.ref)),fr+=p,er+=b;fr+=m,er+=w}fr+=y,er+=P}fr+=v,er+=k}fr+=j,er+=z}fr+=u,er+=A}fr+=x,er+=E}fr+=g,er+=q}},function(r,o,s,t){var d,i,n,l,h,p,m,y,v,j,u,x,g,b,w,P,k,z,A,E,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or,sr,fr,er,tr,ar,dr,ir,cr,nr,lr,hr,pr,mr,yr,vr,jr,ur,xr,gr,br,wr,Pr,kr,zr,Ar,Er,qr;for(W=(qr=f(r.shape,r.strides,o.strides)).sh,er=qr.sx,tr=qr.sy,V=a(qr.idx),d=e(r.dtype,o.dtype),ar=r.offset,dr=o.offset,i=r.data,n=o.data,p=er[0],w=tr[0],l=r.accessors[0],h=o.accessors[1],Er=W[8];Er>0;)for(Er<d?(fr=Er,Er=0):(fr=d,Er-=d),L=ar+Er*er[8],U=dr+Er*tr[8],Ar=W[7];Ar>0;)for(Ar<d?(sr=Ar,Ar=0):(sr=d,Ar-=d),b=er[8]-sr*er[7],C=tr[8]-sr*tr[7],K=L+Ar*er[7],T=U+Ar*tr[7],zr=W[6];zr>0;)for(zr<d?(or=zr,zr=0):(or=d,zr-=d),g=er[7]-or*er[6],B=tr[7]-or*tr[6],J=K+zr*er[6],S=T+zr*tr[6],kr=W[5];kr>0;)for(kr<d?(rr=kr,kr=0):(rr=d,kr-=d),x=er[6]-rr*er[5],q=tr[6]-rr*tr[5],I=J+kr*er[5],R=S+kr*tr[5],Pr=W[4];Pr>0;)for(Pr<d?(_=Pr,Pr=0):(_=d,Pr-=d),u=er[5]-_*er[4],E=tr[5]-_*tr[4],H=I+Pr*er[4],Q=R+Pr*tr[4],wr=W[3];wr>0;)for(wr<d?($=wr,wr=0):($=d,wr-=d),j=er[4]-$*er[3],A=tr[4]-$*tr[3],G=H+wr*er[3],O=Q+wr*tr[3],br=W[2];br>0;)for(br<d?(Z=br,br=0):(Z=d,br-=d),v=er[3]-Z*er[2],z=tr[3]-Z*tr[2],F=G+br*er[2],N=O+br*tr[2],gr=W[1];gr>0;)for(gr<d?(Y=gr,gr=0):(Y=d,gr-=d),y=er[2]-Y*er[1],k=tr[2]-Y*tr[1],D=F+gr*er[1],M=N+gr*tr[1],xr=W[0];xr>0;)for(xr<d?(X=xr,xr=0):(X=d,xr-=d),ir=D+xr*er[0],cr=M+xr*tr[0],m=er[1]-X*er[0],P=tr[1]-X*tr[0],ur=0;ur<fr;ur++){for(jr=0;jr<sr;jr++){for(vr=0;vr<or;vr++){for(yr=0;yr<rr;yr++){for(mr=0;mr<_;mr++){for(pr=0;pr<$;pr++){for(hr=0;hr<Z;hr++){for(lr=0;lr<Y;lr++){for(nr=0;nr<X;nr++)h(n,cr,s.call(t,l(i,ir),c([ur,jr,vr,yr,mr,pr,hr,lr,nr],V),r.ref)),ir+=p,cr+=w;ir+=m,cr+=P}ir+=y,cr+=k}ir+=v,cr+=z}ir+=j,cr+=A}ir+=u,cr+=E}ir+=x,cr+=q}ir+=g,cr+=B}ir+=b,cr+=C}},function(r,o,s,f){var e,c,n,l,h,p,m,y,v,j,u,x,g,b,w,P,k,z,A,E,q,B,C,D,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,rr,or,sr,fr,er,tr,ar,dr,ir,cr,nr,lr,hr,pr,mr,yr,vr,jr,ur,xr,gr,br,wr,Pr,kr,zr,Ar,Er,qr,Br,Cr,Dr,Fr,Gr,Hr,Ir;for($=(Ir=d(r.shape,r.strides,o.strides)).sh,cr=Ir.sx,nr=Ir.sy,Z=a(Ir.idx),e=i(r.dtype,o.dtype),lr=r.offset,hr=o.offset,c=r.data,n=o.data,p=cr[0],P=nr[0],l=r.accessors[0],h=o.accessors[1],Hr=$[9];Hr>0;)for(Hr<e?(ir=Hr,Hr=0):(ir=e,Hr-=e),O=lr+Hr*cr[9],Y=hr+Hr*nr[9],Gr=$[8];Gr>0;)for(Gr<e?(dr=Gr,Gr=0):(dr=e,Gr-=e),w=cr[9]-dr*cr[8],F=nr[9]-dr*nr[8],N=O+Gr*cr[8],X=Y+Gr*nr[8],Fr=$[7];Fr>0;)for(Fr<e?(ar=Fr,Fr=0):(ar=e,Fr-=e),b=cr[8]-ar*cr[7],D=nr[8]-ar*nr[7],M=N+Fr*cr[7],W=X+Fr*nr[7],Dr=$[6];Dr>0;)for(Dr<e?(tr=Dr,Dr=0):(tr=e,Dr-=e),g=cr[7]-tr*cr[6],C=nr[7]-tr*nr[6],L=M+Dr*cr[6],V=W+Dr*nr[6],Cr=$[5];Cr>0;)for(Cr<e?(er=Cr,Cr=0):(er=e,Cr-=e),x=cr[6]-er*cr[5],B=nr[6]-er*nr[5],K=L+Cr*cr[5],U=V+Cr*nr[5],Br=$[4];Br>0;)for(Br<e?(fr=Br,Br=0):(fr=e,Br-=e),u=cr[5]-fr*cr[4],q=nr[5]-fr*nr[4],J=K+Br*cr[4],T=U+Br*nr[4],qr=$[3];qr>0;)for(qr<e?(sr=qr,qr=0):(sr=e,qr-=e),j=cr[4]-sr*cr[3],E=nr[4]-sr*nr[3],I=J+qr*cr[3],S=T+qr*nr[3],Er=$[2];Er>0;)for(Er<e?(or=Er,Er=0):(or=e,Er-=e),v=cr[3]-or*cr[2],A=nr[3]-or*nr[2],H=I+Er*cr[2],R=S+Er*nr[2],Ar=$[1];Ar>0;)for(Ar<e?(rr=Ar,Ar=0):(rr=e,Ar-=e),y=cr[2]-rr*cr[1],z=nr[2]-rr*nr[1],G=H+Ar*cr[1],Q=R+Ar*nr[1],zr=$[0];zr>0;)for(zr<e?(_=zr,zr=0):(_=e,zr-=e),pr=G+zr*cr[0],mr=Q+zr*nr[0],m=cr[1]-_*cr[0],k=nr[1]-_*nr[0],kr=0;kr<ir;kr++){for(Pr=0;Pr<dr;Pr++){for(wr=0;wr<ar;wr++){for(br=0;br<tr;br++){for(gr=0;gr<er;gr++){for(xr=0;xr<fr;xr++){for(ur=0;ur<sr;ur++){for(jr=0;jr<or;jr++){for(vr=0;vr<rr;vr++){for(yr=0;yr<_;yr++)h(n,mr,s.call(f,l(c,pr),t([kr,Pr,wr,br,gr,xr,ur,jr,vr,yr],Z),r.ref)),pr+=p,mr+=P;pr+=m,mr+=k}pr+=y,mr+=z}pr+=v,mr+=A}pr+=j,mr+=E}pr+=u,mr+=q}pr+=x,mr+=B}pr+=g,mr+=C}pr+=b,mr+=D}pr+=w,mr+=F}}],b=j.length-1;function w(f,e,t){var a,d,i,c,n,l,w,P,k,z,A,E,q,B,C,D,F;if(B=s(f[0]),C=s(f[1]),c=B.shape,n=C.shape,(a=c.length)!==n.length)throw new Error("invalid arguments. Arrays must have the same number of dimensions (i.e., same rank). ndims(x) == "+a+". ndims(y) == "+n.length+".");if(0===a)return B.accessorProtocol||C.accessorProtocol?u[a](B,C,e,t):j[a](B,C,e,t);for(P=1,q=0,D=0;D<a;D++){if((F=c[D])!==n[D])throw new Error("invalid arguments. Array must have the same shape.");P*=F,1===F&&(q+=1)}if(0!==P){if(1===a)return B.accessorProtocol||C.accessorProtocol?u[a](B,C,e,t):j[a](B,C,e,t);if(k=B.strides,z=C.strides,q===a-1){for(D=0;D<a&&1===c[D];D++);return B.shape=[c[D]],C.shape=B.shape,B.strides=[k[D]],C.strides=[z[D]],B.accessorProtocol||C.accessorProtocol?u[1](B,C,e,t):j[1](B,C,e,t)}if(l=r(k),w=r(z),0!==l&&0!==w&&l===w){if(d=o(c,k,B.offset),i=o(n,z,C.offset),P===d[1]-d[0]+1&&P===i[1]-i[0]+1)return A=1===l?d[0]:d[1],E=1===w?i[0]:i[1],B.shape=[P],C.shape=B.shape,B.strides=[l],C.strides=[w],B.offset=A,C.offset=E,B.accessorProtocol||C.accessorProtocol?u[1](B,C,e,t):j[1](B,C,e,t);if(a<=b)return B.accessorProtocol||C.accessorProtocol?u[a](B,C,e,t):j[a](B,C,e,t)}return a<=b?B.accessorProtocol||C.accessorProtocol?g[a-2](B,C,e,t):x[a-2](B,C,e,t):B.accessorProtocol||C.accessorProtocol?function(r,o,s,f){var e,t,a,d,i,c,n,l,v,j,u,x,g,b,w,P;for(v=r.shape,i=h(v),e=r.data,t=o.data,j=r.strides,u=o.strides,x=r.offset,g=o.offset,a=r.order,d=o.order,c=r.accessors[0],n=o.accessors[1],P=0;P<i;P++)b=p(v,j,x,a,P,y),w=p(v,u,g,d,P,y),l=m(v,j,0,a,P,y),n(t,w,s.call(f,c(e,b),l,r.ref))}(B,C,e,t):void function(r,o,s,f){var e,t,a,d,i,c,n,l,y,j,u,x,g,b;for(n=r.shape,i=h(n),e=r.data,t=o.data,l=r.strides,y=o.strides,j=r.offset,u=o.offset,a=r.order,d=o.order,b=0;b<i;b++)x=p(n,l,j,a,b,v),g=p(n,y,u,d,b,v),c=m(n,l,0,a,b,v),t[g]=s.call(f,e[x],c,r.ref)}(B,C,e,t)}}export{w as default};
//# sourceMappingURL=index.mjs.map
